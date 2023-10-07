import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() movie_id: number | undefined;
  @Output() data = new EventEmitter<any>();

  btnClick(): void {
    this.data.emit(this.movie_id);
  }
}
