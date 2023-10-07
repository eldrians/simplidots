import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant, headers } from 'src/app/core/constants/constants';
import { IRoot } from 'src/app/core/interfaces/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IRoot> {
    return this.http.get<IRoot>(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
  }

  favoriteHandler(data: any): Observable<IRoot> {
    const url = `${constant.baseUrl}/account/372/favorite?api_key=${environment.apiKey}`;
    return this.http.post<IRoot>(url, data, { headers: headers });
  }
}
