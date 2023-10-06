import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  faStar = faStar;
  isFavourite = true;

  movies: any = [];
  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      this.movies = res.results;
    });
  }

  addFavourite(id: number) {
    let data = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    this.service.handleFavourite(data).subscribe((res) => {
      console.log(res);
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
