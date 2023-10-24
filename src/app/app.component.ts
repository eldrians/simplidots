import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent, HeaderComponent } from './shared/components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {
  constructor() {
    console.log('app-component done!');
  }
}
