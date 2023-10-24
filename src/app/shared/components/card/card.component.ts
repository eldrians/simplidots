import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { UserService } from '../../../../app/core/services';
import { ButtonComponent } from '../button/button.component';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

type TFavoriteHandler = {
  media_type: string;
  media_id: number;
  favorite: boolean;
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterModule,
    SweetAlert2Module,
    NgbModule,
    FontAwesomeModule,
    DatePipe,
    ButtonComponent,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() movie: IMovie | undefined;
  @Input() toAdd?: boolean;
  favoriteHandler: TFavoriteHandler | undefined;
  faStar = faStar;

  constructor(private userServices: UserService) {}

  setFavorite(id: number, title: string) {
    if (this.toAdd == true) {
      this.favoriteHandler = {
        media_type: 'movie',
        media_id: id,
        favorite: true,
      };
    } else if (this.toAdd == false) {
      this.favoriteHandler = {
        media_type: 'movie',
        media_id: id,
        favorite: false,
      };
    }
    this.userServices.favoriteHandler(this.favoriteHandler).subscribe((res) => {
      if (this.toAdd) {
        Swal.fire(
          'Difavoritkan',
          `Film ${title} ditambahkan ke favorite`,
          'success'
        ).then(() => {
          location.reload();
        });
      } else {
        Swal.fire(
          'Dihapus',
          `Film ${title} dihapus dari favorite`,
          'error'
        ).then(() => {
          location.reload();
        });
      }
    });
  }

  getRating(rate: number) {
    rate;
    return rate / 2;
  }
}
