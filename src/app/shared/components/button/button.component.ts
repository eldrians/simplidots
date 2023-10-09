import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <button
      class="p-1 border border-primaryApp group rounded text-xs md:text-sm"
    >
      <p
        class="text-primaryApp/80 group-hover:text-yellow-500 "
        *ngIf="varType() == true"
      >
        {{ title }}
      </p>
      <fa-icon
        *ngIf="varType() == false && toAdd == true"
        [icon]="title"
        class="text-primaryApp/80 hover:text-yellow-500"
      ></fa-icon>
      <fa-icon
        *ngIf="varType() == false && toAdd == false"
        [icon]="title"
        class="text-yellow-500"
      ></fa-icon>
    </button>
  `,
})
export class ButtonComponent {
  @Input() title: any;
  @Input() toAdd?: boolean;

  varType(): boolean {
    return typeof this.title === 'string';
  }
}
