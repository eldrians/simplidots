/// <reference types="@angular/localize" />

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      {
        path: 'movies',
        loadChildren: () =>
          import('./app/pages/movie/movie.routes').then((c) => c.MOVIE_ROUTES),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./app/pages/user/user-favorite/user-favorite.component').then(
            (c) => c.UserFavoriteComponent
          ),
      },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'movies', pathMatch: 'full' },
    ]),
  ],
}).catch((err) => console.error(err));
