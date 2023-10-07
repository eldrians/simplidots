import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './modules/movies/movies.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';
import { MovieDetailComponent } from './modules/movie-detail/movie-detail.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { SidebarComponent } from './shared/ui/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { UserFavoriteComponent } from './pages/user/user-favorite/user-favorite.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, FavouritesComponent, MovieDetailComponent, HeaderComponent, SidebarComponent, MovieListComponent, UserFavoriteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
