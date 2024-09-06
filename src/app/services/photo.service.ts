import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SearchPhotosParams } from '../types/photos.types';
import { tap, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  readonly baseUrl = environment.unsplash.UNSPLASH_URL;
  private headers = {
    Authorization: `Client-ID ${environment.unsplash.UNSPLASH_ACCESS_KEY}`,
  };

  constructor(private http: HttpClient) {}

  getRandomPhoto(params: SearchPhotosParams) {
    const queryParams = new HttpParams().set('query', params.query);

    return this.http
      .get(`${this.baseUrl}/photos/random`, {
        params: queryParams,
        headers: this.headers,
      })
      .pipe(
        take(1),
        tap((data) => console.log(data)),
        catchError((err) => {
          return throwError(
            () =>
              `There was a problem fetching data from the Unsplash API: ${err.error.errors.toString()}`
          );
        })
      );
  }

  searchPhotos(params: SearchPhotosParams) {
    const queryParams = new HttpParams().set('query', params.query);

    return this.http
      .get(`${this.baseUrl}/search/photos`, {
        params: queryParams,
        headers: this.headers,
      })
      .pipe(
        tap((data) => console.log(data)),
        map((data: any) => data.results),
        catchError((err) => {
          return throwError(
            () =>
              `There was a problem fetching data from the Unsplash API: ${err.error.errors.toString()}`
          );
        })
      );
  }
}
