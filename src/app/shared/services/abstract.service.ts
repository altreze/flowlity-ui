/**
 * @Author: mouad
 * @Date:   2019-07-31T13:24:05+01:00
 * @Filename: abstract.service.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T13:24:30+01:00
 * @Copyright: Altreze SARL
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
  abstract get(): Observable<T[]>;
  // abstract getById(id: string|number): Observable<T>;
  // abstract create(instance: T): void;
  // abstract update(instance: T): void;
  // abstract delete(instance: string|number|T): void;
}
