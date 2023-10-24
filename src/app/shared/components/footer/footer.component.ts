import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div
      class="w-full h-[100px] border-t border-primaryApp/80 p-4 flex flex-col justify-center items-center mb-10"
    >
      <h2 class="text-xs text-primaryApp/90 mb-2">Support by :</h2>
      <div class="flex flex-row gap-4">
        <img
          src="assets/simplidots-logo.png"
          alt="SimpliDots Logo"
          class="w-[70px]"
        />
        <img src="assets/tmdb-logo.svg" alt="TMDB Logo" class="w-[70px]" />
      </div>
    </div>
  `,
})
export class FooterComponent {
  constructor() {
    console.log('footer done!');
  }
}
