import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../../../app/core/interfaces/movie.model';
import { UserService } from '../../../../app/core/services';

type TFavoriteHandler = {
  media_type: string;
  media_id: number;
  favorite: boolean;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() movie: IMovie | undefined;
  @Input() toAdd?: boolean;
  favoriteHandler: TFavoriteHandler | undefined;

  constructor(private userServices: UserService) {}

  ngOnInit(): void {}

  setFavorite(id: number) {
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
      console.log(res);
    });
  }

  getRating(rate: number) {
    rate;
    return rate / 2;
  }
}
