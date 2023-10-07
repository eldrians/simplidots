import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { UserFavoriteComponent } from './pages/user/user-favorite/user-favorite.component';
import { MovieDetailComponent } from './pages/movie/movie-detail/movie-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'favorites', component: UserFavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
