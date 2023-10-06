import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
})
export class FavouritesComponent implements OnInit {
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
