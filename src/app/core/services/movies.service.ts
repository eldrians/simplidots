import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  // banner
  bannerApiData(): Observable<any> {
    return this.http.get<any>(
      `${constant.baseUrl}/discover/movie?api_key=${environment.apiKey}`
    );
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${constant.baseUrl}/movie/${data}?api_key=${environment.apiKey}`
    );
  }

  getFavourites(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDAwMTI0ZWExYWZlNjQyOTI1MjY2N2E3ZTA1NTExMCIsInN1YiI6IjYzZmRiMWVmYzcxNzZkMDBkYjU4OGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DMMBG1DAww48cma8R70LR7rK6B70_xPKbeVhvHjoWpg',
      'Content-Type': 'application/json',
    });

    const url = `${constant.baseUrl}/account/372/favorite/movies?api_key=${environment.apiKey}`;
    return this.http.get<any>(url, { headers: headers });
  }

  handleFavourite(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDAwMTI0ZWExYWZlNjQyOTI1MjY2N2E3ZTA1NTExMCIsInN1YiI6IjYzZmRiMWVmYzcxNzZkMDBkYjU4OGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DMMBG1DAww48cma8R70LR7rK6B70_xPKbeVhvHjoWpg',
      'Content-Type': 'application/json',
    });
    const url = `${constant.baseUrl}/account/372/favorite?api_key=${environment.apiKey}`;
    return this.http.post(url, data, { headers: headers });
  }
}
