import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from '../../../app/core/services/movie.service';
import { IRoot } from '../../../app/core/interfaces/movie.model';
import { environment } from '../../../environments/environment';
import { constant } from '../../../app/core/constants/constants';

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
    const mockMovies: IRoot = {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    };

    service.getMovies().subscribe((response) => {
      expect(response).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMovies);
  });

  it('should fetch movies from a type', () => {
    const type = 'now_playing';
    const mockMovies: any = {
      // Define your mock movie data here
    };

    service.getMoviesFromType(type).subscribe((response) => {
      expect(response).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      `${constant.baseUrl}/movie/${type}?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMovies);
  });

  it('should fetch movie detail', () => {
    const movieId = '123';
    const mockMovieDetail: any = {
      // Define your mock movie detail data here
    };

    service.getMovieDetail(movieId).subscribe((response) => {
      expect(response).toEqual(mockMovieDetail);
    });

    const req = httpTestingController.expectOne(
      `${constant.baseUrl}/movie/${movieId}?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockMovieDetail);
  });
});
