import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from '../../../../app/shared/components/card/card.component';
import { UserService } from '../../../../app/core/services';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { of } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockUserService: any;

  beforeEach(() => {
    mockUserService = {
      favoriteHandler: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set favorite to true and call UserService when toAdd is true', () => {
    const movieId = 123;
    component.toAdd = true;
    mockUserService.favoriteHandler.mockReturnValue(of({}));

    component.setFavorite(movieId);

    const expectedFavoriteHandler = {
      media_type: 'movie',
      media_id: movieId,
      favorite: true,
    };

    expect(component.favoriteHandler).toEqual(expectedFavoriteHandler);
    expect(mockUserService.favoriteHandler).toHaveBeenCalledWith(
      expectedFavoriteHandler
    );
  });

  it('should return half of a positive rate', () => {
    const rate = 8.0;
    const result = component.getRating(rate);
    expect(result).toBe(4.0);
  });

  it('should set favorite to false and call UserService when toAdd is false', () => {
    const movieId = 456;
    component.toAdd = false;

    // Mock the favoriteHandler to return an observable
    mockUserService.favoriteHandler.mockReturnValue(of({}));

    component.setFavorite(movieId);

    const expectedFavoriteHandler = {
      media_type: 'movie',
      media_id: movieId,
      favorite: false,
    };

    expect(component.favoriteHandler).toEqual(expectedFavoriteHandler);
    expect(mockUserService.favoriteHandler).toHaveBeenCalledWith(
      expectedFavoriteHandler
    );
  });
});
