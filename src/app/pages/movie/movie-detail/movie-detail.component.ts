import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { MovieDetailService } from 'src/app/core/services';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  constructor(
    private service: MovieDetailService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId: number | string | null =
      this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }

  getMovie(id: number | string | null) {
    this.service.getMovieDetail(id).subscribe((res) => {
      this.movie = res;
    });
  }
}
