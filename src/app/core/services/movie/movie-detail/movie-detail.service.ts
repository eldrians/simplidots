import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from 'src/app/core/constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  constructor(private http: HttpClient) {}

  getMovieDetail(data: number | string | null): Observable<any> {
    return this.http.get<any>(
      `${constant.baseUrl}/movie/${data}?api_key=${environment.apiKey}`
    );
  }
}
