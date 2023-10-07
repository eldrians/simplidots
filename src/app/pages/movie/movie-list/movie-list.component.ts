import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { MovieListService } from 'src/app/core/services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  faStar = faStar;
  isFavourite = true;

  movies: IMovie[] = [];
  constructor(private service: MovieListService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.service.getMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }
}
