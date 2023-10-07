import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '3000124ea1afe6429252667a7e055110';

  // banner
  bannerApiData(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`
    );
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  getFavourites(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDAwMTI0ZWExYWZlNjQyOTI1MjY2N2E3ZTA1NTExMCIsInN1YiI6IjYzZmRiMWVmYzcxNzZkMDBkYjU4OGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DMMBG1DAww48cma8R70LR7rK6B70_xPKbeVhvHjoWpg',
      'Content-Type': 'application/json',
    });

    const url = `${this.baseUrl}/account/372/favorite/movies?api_key=${this.apiKey}`;
    return this.http.get<any>(url, { headers: headers });
  }

  handleFavourite(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDAwMTI0ZWExYWZlNjQyOTI1MjY2N2E3ZTA1NTExMCIsInN1YiI6IjYzZmRiMWVmYzcxNzZkMDBkYjU4OGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DMMBG1DAww48cma8R70LR7rK6B70_xPKbeVhvHjoWpg',
      'Content-Type': 'application/json',
    });
    const url = `${this.baseUrl}/account/372/favorite?api_key=${this.apiKey}`;
    return this.http.post(url, data, { headers: headers });
  }
}
