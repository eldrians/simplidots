import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const constant = {
  baseUrl: 'https://api.themoviedb.org/3',
};

export const headers = new HttpHeaders({
  Authorization: `Bearer ${environment.auth}`,
  'Content-Type': 'application/json',
});
