import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
})
export class UserFavoriteComponent implements OnInit {
  faStar = faStar;
  favouriteMovie: any = [];
  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.getFavouriteMovie();
  }

  getFavouriteMovie() {
    this.service.getFavourites().subscribe((res) => {
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
    this.service.handleFavourite(data).subscribe((res) => {
      console.log(res);
    });
  }
}
