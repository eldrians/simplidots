import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { constant } from '../../../app/core/constants/constants';
import { IMovie, IRoot } from '../../../app/core/interfaces/movie.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  movies: IMovie[] = [];

  getMovies(): Observable<IRoot> {
    return this.http.get<IRoot>(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
  }

  // Movie with infinite scroll
  getMoviesByLimit(
    page: number,
    moviesPerPage: number,
    movies: IMovie[]
  ): Observable<IMovie[]> {
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesByLimit: IMovie[] = [];

    for (let i = startIndex; i < endIndex; i++) {
      if (i < movies.length) {
        moviesByLimit.push(movies[i]);
      }
    }
    return of(moviesByLimit).pipe(delay(500));
  }

  // get movies detail
  getMovieDetail(data: number | string | null): Observable<any> {
    return this.http.get<any>(
      `${constant.baseUrl}/movie/${data}?api_key=${environment.apiKey}`
    );
  }
}
