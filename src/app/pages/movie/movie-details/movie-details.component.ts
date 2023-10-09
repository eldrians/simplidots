import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../../../app/core/services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent, LoadingComponent } from '../../../../app/shared/components';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule, DatePipe, LoadingComponent, ButtonComponent],
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  movieDetail: any;

  isLoading: boolean = false;
  toggleLoading = () => (this.isLoading = !this.isLoading);

  constructor(
    private movieServices: MovieService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId: number | string | null =
      this.router.snapshot.paramMap.get('id');
    this.getMovieDetail(getParamId);
  }

  getMovieDetail(id: number | string | null) {
    this.toggleLoading(),
      this.movieServices.getMovieDetail(id).subscribe({
        next: (res) => (this.movieDetail = res),
        error: (err) => console.log(err),
        complete: () => this.toggleLoading(),
      });
  }

  getRating(rate: number) {
    rate;
    return rate / 2;
  }
}
