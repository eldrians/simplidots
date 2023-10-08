import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MovieListComponent } from '../../../../app/pages/movie/movie-list/movie-list.component';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { MovieService } from '../../../../app/core/services';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let mockMovieService: any;

  beforeEach(() => {
    mockMovieService = {
      getMovies: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    });

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovies and populate movies array', () => {
    const mockMovieData: IMovie[] = [
      {
        adult: false,
        backdrop_path: '/backdrop.jpg',
        genre_ids: [1, 2],
        id: 123,
        original_language: 'en',
        original_title: 'Original Title',
        overview: 'Movie overview',
        popularity: 7.8,
        poster_path: '/poster.jpg',
        release_date: '2023-01-01',
        title: 'Movie Title',
        video: false,
        vote_average: 8.0,
        vote_count: 100,
      },
    ];

    mockMovieService.getMovies.mockReturnValue(of({ results: mockMovieData }));

    component.ngOnInit();

    expect(mockMovieService.getMovies).toHaveBeenCalled();
    expect(component.movies).toEqual(mockMovieData);
  });
});
