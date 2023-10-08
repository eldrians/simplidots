import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant, headers } from '../../../app/core/constants/constants';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // get all user favorites movies
  getFavorites(): Observable<any> {
    const url = `${constant.baseUrl}/account/372/favorite/movies?api_key=${environment.apiKey}`;
    return this.http.get<any>(url, { headers: headers });
  }

  // handle add or remove favorite  movie
  favoriteHandler(data: any): Observable<any> {
    const url = `${constant.baseUrl}/account/372/favorite?api_key=${environment.apiKey}`;
    return this.http.post(url, data, { headers: headers });
  }
}
