import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { UserService } from 'src/app/core/services';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
})
export class UserFavoriteComponent implements OnInit {
  faStar = faStar;
  favouriteMovie: IMovie[] = [];

  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getFavouriteMovie();
  }

  getFavouriteMovie() {
    this.userServices.getFavorites().subscribe((res) => {
      this.favouriteMovie = res.results;
    });
  }
}
