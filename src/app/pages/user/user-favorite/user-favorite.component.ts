import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { UserFavoriteService } from 'src/app/core/services';

type TFavoriteHandler = {
  media_type: string;
  media_id: number;
  favorite: boolean;
};

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
})
export class UserFavoriteComponent implements OnInit {
  faStar = faStar;
  favouriteMovie: IMovie[] = [];
  favoriteHandler: TFavoriteHandler | undefined;

  constructor(private service: UserFavoriteService) {}

  ngOnInit(): void {
    this.getFavouriteMovie();
  }

  getFavouriteMovie() {
    this.service.getFavorites().subscribe((res) => {
      this.favouriteMovie = res.results;
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
