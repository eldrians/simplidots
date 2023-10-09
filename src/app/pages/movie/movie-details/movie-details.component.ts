import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../../../app/core/services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, DatePipe],
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  // if (this.movie && this.movie.poster_path) {
  //   this.imgBaseUrl = this.storage.getImageBaseUrl()
  //   this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
  // } else {
  //   this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
  // }
  constructor(
    private movieServices: MovieService,
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
