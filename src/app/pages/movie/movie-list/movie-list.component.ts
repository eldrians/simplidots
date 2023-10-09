import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { MovieService } from '../../../../app/core/services';
import { CardComponent } from 'src/app/shared/components';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, CardComponent, InfiniteScrollModule],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  //icon
  faStar = faStar;

  movies: IMovie[] = [];

  //infinites scroll
  moviesLimit: IMovie[] = [];
  isLoading: boolean = false;
  toggleLoading = () => (this.isLoading = !this.isLoading);
  currentPage: number = 1;

  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieServices.getMovies().subscribe((res) => {
      this.movies = res.results;
      if (this.movies.length > 0) {
        this.getMovieOnscroll();
      }
    });
  }

  getMovieOnscroll() {
    this.toggleLoading();
    this.movieServices
      .getMoviesByLimit(this.currentPage, 6, this.movies)
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
      .getMoviesByLimit(this.currentPage, 6, this.movies)
      .subscribe({
        next: (res) => (this.moviesLimit = [...this.moviesLimit, ...res]),
        error: (err) => console.log(err),
        complete: () => this.toggleLoading(),
      });
  };
}
