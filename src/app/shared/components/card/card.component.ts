import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/core/interfaces/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() movie: IMovie | undefined;
  @Input() title?: string = '';

  constructor() {}

  ngOnInit(): void {}
}
