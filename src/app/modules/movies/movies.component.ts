import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  dataMovies: any;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res) => {
      this.dataMovies = res;
    });
  }
}
