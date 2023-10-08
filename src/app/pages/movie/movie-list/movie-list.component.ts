import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { MovieService } from '../../../../app/core/services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  faStar = faStar;
  isFavourite = true;

  movies: IMovie[] = [];
  constructor(private movieServices: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieServices.getMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }
}
