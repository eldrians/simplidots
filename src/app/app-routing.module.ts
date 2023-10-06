import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './modules/movies/movies.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';
import { MovieDetailComponent } from './modules/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: '/movies', component: MoviesComponent },
  { path: '/movie/:id', component: MovieDetailComponent },
  { path: '/favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
