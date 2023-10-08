import { Component, OnInit } from '@angular/core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faX = faX;

  isOpen: boolean = false;
  constructor() {}

  ngOnInit() {
    this.menuClick(this.isOpen);
  }

  menuClick(b: boolean) {
    this.isOpen = b;
    if (this.isOpen == true) {
      console.log('isOpen');
    } else if (this.isOpen == false) {
      console.log('isNotOpen');
    }
  }
}
