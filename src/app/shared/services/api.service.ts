/**
 * @Author: mouad
 * @Date:   2019-07-31T13:23:10+01:00
 * @Filename: api.service.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T13:30:20+01:00
 * @Copyright: Altreze SARL
 */

import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: environment.api_version
  });

  api_url: string = environment.api_url;

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.api_url}/${path}`, { headers: this.headers, params: params })
      .pipe(
        tap(() => console.log(`${this.api_url}/${path} ${params}`)),
        catchError(this.formatErrors)
      );
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
