/**
 * @Author: mouad
 * @Date:   2019-07-31T17:16:35+01:00
 * @Filename: product.effects.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:52:07+01:00
 * @Copyright: Altreze SARL
 */

 import { Injectable } from '@angular/core';
 import { Action } from '@ngrx/store';
 import { Actions, Effect, ofType } from '@ngrx/effects';
 import { Observable, of } from 'rxjs';
 import { mergeMap, map, catchError } from 'rxjs/operators';

 import { Product } from '../models/product.model';
 import * as productActions from '../actions/product.actions';

 import { ProductService } from '../../../shared/services';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private readonly productService: ProductService
  ) {}

  @Effect()
  loadingProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProducts>(productActions.ActionTypes.LOADING_PRODUCTS),
    mergeMap(
      (actions: productActions.LoadProducts) => this.productService.get()
        .pipe(
          map(
            (products: Product[]) => new productActions.LoadProductsSuccess(products)
          ),
          catchError(err => of(new productActions.LoadProductsFail(err)))
        )
    )
  );

}
