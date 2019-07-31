/**
 * @Author: mouad
 * @Date:   2019-07-31T13:23:19+01:00
 * @Filename: product.service.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:52:04+01:00
 * @Copyright: Altreze SARL
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { AbstractService } from './abstract.service';
// import { Product } from '../../models';

export interface Product {
  product_id: number;
  product_name: string;
  date: string;
  inventory_level: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<Product> {
  private readonly path = `products`;

  constructor(
    private readonly apiService: ApiService<any>
  ) {
    super();
  }

  get(): Observable<Product[]> {
    return this.apiService.get(`${this.path}`)
      .pipe(
        map(res => res.data)
      );
  }
}
