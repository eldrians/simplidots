import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './modules/movies/movies.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';
import { MovieDetailComponent } from './modules/movie-detail/movie-detail.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, FavouritesComponent, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
