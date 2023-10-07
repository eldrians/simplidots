import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/core/interfaces/movie.model';
import { MovieListService } from 'src/app/core/services';

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
  @Input() title?: string = '';
  favoriteHandler: TFavoriteHandler | undefined;

  constructor(private service: MovieListService) {}

  ngOnInit(): void {}

  addFavourite(id: number) {
    this.favoriteHandler = {
      media_type: 'movie',
      media_id: id,
      favorite: true,
    };
    this.service.favoriteHandler(this.favoriteHandler).subscribe((res) => {
      console.log(res);
    });
  }

  removeFavourite(id: number) {
    this.favoriteHandler = {
      media_type: 'movie',
      media_id: id,
      favorite: false,
    };
    this.service.favoriteHandler(this.favoriteHandler).subscribe((res) => {
      console.log(res);
    });
  }
}
