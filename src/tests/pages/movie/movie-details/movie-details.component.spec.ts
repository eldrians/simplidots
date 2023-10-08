import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetailsComponent } from '../../../../app/pages/movie/movie-details/movie-details.component';
import { MovieService, UserService } from '../../../../app/core/services';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let mockActivatedRoute: any;
  let mockMovieService: any;
  let mockUserService: any;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jest.fn(),
        },
      },
    };

    mockMovieService = {
      getMovieDetail: jest.fn(),
    };

    mockUserService = {
      // Mock UserService methods if needed
    };

    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: MovieService, useValue: mockMovieService },
        { provide: UserService, useValue: mockUserService },
      ],
    });

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovie with the correct ID from ActivatedRoute', () => {
    const movieId = '123';
    mockActivatedRoute.snapshot.paramMap.get.mockReturnValue(movieId);
    const mockMovieData = {
      /* Define your mock movie data here */
    };

    mockMovieService.getMovieDetail.mockReturnValue(of(mockMovieData));

    component.ngOnInit();

    expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('id');
    expect(mockMovieService.getMovieDetail).toHaveBeenCalledWith(movieId);
    expect(component.movie).toEqual(mockMovieData);
  });

  it('should calculate the correct rating', () => {
    expect(component.getRating(8)).toEqual(4);
  });
});
