import { AppComponent } from './app.component';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { UserFavoriteComponent } from './pages/user/user-favorite/user-favorite.component';

import {
  HeaderComponent,
  SidebarComponent,
  CardComponent,
  ButtonComponent,
  FooterComponent,
} from './shared/components';
import { MovieDetailsComponent } from './pages/movie/movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './shared/components/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MovieListComponent,
    UserFavoriteComponent,
    CardComponent,
    ButtonComponent,
    FooterComponent,
    MovieDetailsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    InfiniteScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
