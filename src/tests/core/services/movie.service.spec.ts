import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from '../../../app/core/services/movie.service';
import { constant } from '../../../app/core/constants/constants';
import { environment } from '../../../environments/environment';
import { IMovie, IRoot } from '../../../app/core/interfaces/movie.model';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch movies', () => {
    const dummyMovies: IRoot = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/example_backdrop_path.jpg',
          genre_ids: [1, 2, 3],
          id: 123,
          original_language: 'en',
          original_title: 'Original Title',
          overview: 'Movie overview goes here.',
          popularity: 7.8,
          poster_path: '/example_poster_path.jpg',
          release_date: '2023-10-09',
          title: 'Movie Title',
          video: false,
          vote_average: 8.0,
          vote_count: 1000,
        },
      ],
      total_pages: 3,
      total_results: 30,
    };

    service.getMovies().subscribe((movies: IRoot) => {
      expect(movies).toEqual(dummyMovies);
    });

    const req = httpTestingController.expectOne(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovies);
  });

  it('should fetch movies by limit', () => {
    const page = 1;
    const moviesPerPage = 10;
    const dummyMovies: IMovie[] = [
      {
        adult: false,
        backdrop_path: '/example_backdrop_path.jpg',
        genre_ids: [1, 2, 3],
        id: 123,
        original_language: 'en',
        original_title: 'Original Title',
        overview: 'Movie overview goes here.',
        popularity: 7.8,
        poster_path: '/example_poster_path.jpg',
        release_date: '2023-10-09',
        title: 'Movie Title',
        video: false,
        vote_average: 8.0,
        vote_count: 1000,
      },
    ];

    service
      .getMoviesByLimit(page, moviesPerPage, dummyMovies)
      .subscribe((movies: IMovie[]) => {
        expect(movies.length).toBe(1); // Adjust this according to your data
      });
  });

  it('should fetch movie details', () => {
    const movieId = 123; // Replace with your movie ID
    const dummyMovieDetail: any = {
      // Add your dummy movie detail data here
    };

    service.getMovieDetail(movieId).subscribe((movieDetail: any) => {
      expect(movieDetail).toEqual(dummyMovieDetail);
    });

    const req = httpTestingController.expectOne(
      `${constant.baseUrl}/movie/${movieId}?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovieDetail);
  });
});
