import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <button class="p-1 bg-primaryApp rounded text-xs md:text-sm">
      <p class="text-yellow-400">Star</p>
    </button>
  `,
})
export class ButtonComponent {}
