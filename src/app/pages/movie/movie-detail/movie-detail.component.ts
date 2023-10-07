import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId);

    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetail(id).subscribe((res) => {
      this.movie = res;
    });
  }
}
