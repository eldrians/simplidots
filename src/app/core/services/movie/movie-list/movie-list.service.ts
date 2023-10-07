import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant, headers } from 'src/app/core/constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
  }

  favoriteHandler(data: any): Observable<any> {
    const url = `${constant.baseUrl}/account/372/favorite?api_key=${environment.apiKey}`;
    return this.http.post(url, data, { headers: headers });
  }
}
