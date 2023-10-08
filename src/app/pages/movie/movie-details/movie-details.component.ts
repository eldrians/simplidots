import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService, UserService } from '../../../../app/core/services';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private movieServices: MovieService,
    private userServices: UserService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId: number | string | null =
      this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }

  getMovie(id: number | string | null) {
    this.movieServices.getMovieDetail(id).subscribe((res) => {
      this.movie = res;
    });
  }

  getRating(rate: number) {
    rate;
    return rate / 2;
  }
}
