import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <button
      class="p-1 border border-primaryApp bg-white hover:bg-primaryApp/60 rounded text-xs md:text-sm"
    >
      <p class="text-primaryApp/80 " *ngIf="varType() == true">
        {{ title }}
      </p>
      <fa-icon
        *ngIf="varType() == false"
        [icon]="title"
        class="text-primaryApp/80"
      ></fa-icon>
    </button>
  `,
})
export class ButtonComponent {
  @Input() title: any;

  varType(): boolean {
    return typeof this.title === 'string';
  }
}
