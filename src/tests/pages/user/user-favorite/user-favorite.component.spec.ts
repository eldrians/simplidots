import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserFavoriteComponent } from '../../../../app/pages/user/user-favorite/user-favorite.component';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { UserService } from '../../../../app/core/services';

describe('UserFavoriteComponent', () => {
  let component: UserFavoriteComponent;
  let fixture: ComponentFixture<UserFavoriteComponent>;
  let mockUserService: any;

  beforeEach(() => {
    mockUserService = {
      getFavorites: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [UserFavoriteComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
    });

    fixture = TestBed.createComponent(UserFavoriteComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFavorites and populate favouriteMovie array', () => {
    const mockFavoriteData: IMovie[] = [
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

    mockUserService.getFavorites.mockReturnValue(
      of({ results: mockFavoriteData })
    );

    component.ngOnInit();

    expect(mockUserService.getFavorites).toHaveBeenCalled();
    expect(component.favouriteMovie).toEqual(mockFavoriteData);
  });
});
