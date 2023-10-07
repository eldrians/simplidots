import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { MovieListService } from 'src/app/core/services';

type TFavoriteHandler = {
  media_type: string;
  media_id: number;
  favorite: boolean;
};

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  faStar = faStar;
  isFavourite = true;
  favoriteHandler: TFavoriteHandler | undefined;

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

  addFavourite(id: number) {
    this.favoriteHandler = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    this.service.favoriteHandler(this.favoriteHandler).subscribe((res) => {
      console.log(res);
    });
  }

  removeFavourite(id: number) {
    this.favoriteHandler = {
      media_type: 'movie',
      media_id: id,
      favorite: false,
    };
    this.service.favoriteHandler(this.favoriteHandler).subscribe((res) => {
      console.log(res);
    });
  }
}
