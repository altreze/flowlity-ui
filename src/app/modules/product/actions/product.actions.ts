/**
 * @Author: mouad
 * @Date:   2019-07-31T16:57:21+01:00
 * @Filename: product.actions.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:40:02+01:00
 * @Copyright: Altreze SARL
 */

import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Product } from '../models/product.model';
import { type } from '../utils';

export const ActionTypes = {
  // Managing Adding Product
  UPDATE_PRODUCT: type('[Products] Updating Product'),
  UPDATE_PRODUCT_SUCCESS: type('[Products] Updated Product'),
  UPDATE_PRODUCT_FAILED: type('[Products] Updating failed Product'),

  // Manage Products
  LOADING_PRODUCTS: type('[Products] Loading Products'),
  LOADING_PRODUCTS_SUCCESS: type('[Products] Loaded Products'),
  LOADING_PRODUCTS_FAIL: type('[Products] Loading fail Products')
};

export class UpdateProduct implements Action {
  readonly type = ActionTypes.UPDATE_PRODUCT;

  constructor(public payload: { product: Update<Product> }) {}
}
export class UpdateProductSuccess implements Action {
  readonly type = ActionTypes.UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: { product: Update<Product> }) {}
}
export class UpdateProductFail implements Action {
  readonly type = ActionTypes.UPDATE_PRODUCT_FAILED;

  constructor(public readonly payload: string) {}
}

export class LoadProducts implements Action {
  readonly type = ActionTypes.LOADING_PRODUCTS;

  constructor(public readonly payload: any = null) {}
}
export class LoadProductsSuccess implements Action {
  readonly type = ActionTypes.LOADING_PRODUCTS_SUCCESS;

  constructor(public readonly payload: Product[]) {}
}
export class LoadProductsFail implements Action {
  readonly type = ActionTypes.LOADING_PRODUCTS_FAIL;

  constructor(public readonly payload: string) {}
}

export type ProductActions =
  UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFail
