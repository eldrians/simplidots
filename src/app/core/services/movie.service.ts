import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant, headers } from '../../../app/core/constants/constants';
import { IRoot } from '../../../app/core/interfaces/movie.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // get all movies
  getMovies(): Observable<IRoot> {
    return this.http.get<IRoot>(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
  }

  // get movie from their type
  getMoviesFromType(type: string): Observable<any> {
    // now_playing, popular, top_rated, upcoming
    return this.http.get<any>(
      `${constant.baseUrl}/movie/${type}?api_key=${environment.apiKey}`
    );
  }

  // get movies detail
  getMovieDetail(data: number | string | null): Observable<any> {
    return this.http.get<any>(
      `${constant.baseUrl}/movie/${data}?api_key=${environment.apiKey}`
    );
  }
}
