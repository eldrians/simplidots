import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { UserFavoriteService } from 'src/app/core/services';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
})
export class UserFavoriteComponent implements OnInit {
  faStar = faStar;
  favouriteMovie: any = [];
  constructor(private service: UserFavoriteService) {}

  ngOnInit(): void {
    this.getFavouriteMovie();
  }

  getFavouriteMovie() {
    this.service.getFavorites().subscribe((res) => {
      this.favouriteMovie = res.results;
      console.log(res.results);
    });
  }

  removeFavourite(id: number) {
    let data = {
      media_type: 'movie',
      media_id: id,
      favorite: false,
    };
    this.service.favoriteHandler(data).subscribe((res) => {
      console.log(res);
    });
  }
}
