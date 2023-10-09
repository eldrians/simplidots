import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="flex flex-row text-darkApp/50 text-xl items-center">
      <fa-icon [icon]="faRotateRight" class="animate-spin"></fa-icon>
      <p class="font-semibold uppercase text-xs ml-2">Loading</p>
    </div>
  `,
})
export class LoadingComponent {
  faRotateRight = faRotateRight;
}
