import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieListService } from 'src/app/core/services/movie/movie-list/movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  faStar = faStar;
  isFavourite = true;

  movies: any = [];
  constructor(private service: MovieListService) {}

  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.getMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  addFavourite(id: number) {
    let data = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    this.service.favoriteHandler(data).subscribe((res) => {
      console.log(res);
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
