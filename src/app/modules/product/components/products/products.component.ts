/**
 * @Author: mouad
 * @Date:   2019-07-31T13:39:09+01:00
 * @Filename: products.component.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T22:31:13+01:00
 * @Copyright: Altreze SARL
 */

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, filter, map, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as productActions from '../../actions/product.actions';
import * as fromProduct from '../../reducers';
import { State } from '../../reducers/product.reducer';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  loaded$: Observable<boolean> = of(false);
  products$: Observable<Product[]> = of([]);
  options$: Observable<Product[]> = of([]);
  selectedValue: number = 0;

  constructor(
    private readonly store: Store<State>
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(new productActions.LoadProducts());

      this.loaded$ = this.store.pipe(select(fromProduct.getProductsLoaded));
      this.products$ = this.store.pipe(select(fromProduct.getProducts));

      this.options$ = this.store.pipe(
        select(fromProduct.getProducts)
      );
    });
  }

  onChange(values: any) {
    this.products$ = this.options$.pipe(
      map(products => {
        if (values != 0 ) {
          return products.filter(product => product.product_id == values);
        }  else {
          return products;
        }
      })
    );
  }
}
