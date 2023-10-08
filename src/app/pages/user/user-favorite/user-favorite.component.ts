import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { MovieService, UserService } from '../../../../app/core/services';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
})
export class UserFavoriteComponent implements OnInit {
  // icon
  faStar = faStar;

  favouriteMovie: IMovie[] = [];

  //infinites scroll
  moviesLimit: IMovie[] = [];
  isLoading: boolean = false;
  toggleLoading = () => (this.isLoading = !this.isLoading);
  currentPage: number = 1;

  constructor(
    private userServices: UserService,
    private movieServices: MovieService
  ) {}

  ngOnInit(): void {
    this.getFavouriteMovie();
  }

  getFavouriteMovie() {
    this.userServices.getFavorites().subscribe((res) => {
      this.favouriteMovie = res.results;
      if (this.favouriteMovie.length > 0) {
        this.getMovieOnscroll();
      }
    });
  }

  getMovieOnscroll() {
    this.toggleLoading();
    this.movieServices
      .getMoviesByLimit(this.currentPage, 6, this.favouriteMovie)
      .subscribe({
        next: (res) => (this.moviesLimit = res),
        error: (err) => console.log(err),
        complete: () => this.toggleLoading(),
      });
  }

  appendMovies = () => {
    this.currentPage++;
    this.toggleLoading();
    this.movieServices
      .getMoviesByLimit(this.currentPage, 6, this.favouriteMovie)
      .subscribe({
        next: (res) => (this.moviesLimit = [...this.moviesLimit, ...res]),
        error: (err) => console.log(err),
        complete: () => this.toggleLoading(),
      });
  };
}
