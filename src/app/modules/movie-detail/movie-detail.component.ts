import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  constructor(private service: MoviesService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId);

    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
}
