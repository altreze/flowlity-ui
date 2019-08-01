/**
 * @Author: mouad
 * @Date:   2019-07-31T13:39:09+01:00
 * @Filename: products.component.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-01T14:35:52+01:00
 * @Copyright: Altreze SARL
 */

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map  } from 'rxjs/operators';
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
  immutableProducts$: Observable<Product[]> = of([]);
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
      this.immutableProducts$  = this.products$ = this.store.pipe(select(fromProduct.getProducts));

      this.options$ = this.store.pipe(
        select(fromProduct.getProducts),
        map((products: Product[]) => this.getUnique(products, 'product_name')),
        tap((products: Product[]) => products)
      );
    });
  }

  onChange(values: any) {
    this.products$ = this.immutableProducts$.pipe(
      map((products: Product[]) => {
        if (values != 0 ) {
          return products.filter(product => product.product_name == values);
        }  else {
          return products;
        }
      })
    );
  }

  private getUnique(arr: Array<object>, comp: string) {
    return arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
  }
}
