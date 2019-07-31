/**
 * @Author: mouad
 * @Date:   2019-07-31T16:57:21+01:00
 * @Filename: product.reducer.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T18:27:11+01:00
 * @Copyright: Altreze SARL
 */

import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Product } from '../models/product.model';
import * as actions from '../actions/product.actions';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: nameofclass => nameofclass.product_id
});

export interface State extends EntityState<Product> {
  selectedProductId: string | number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: State = adapter.getInitialState({
  ids: [],
  entities: {},
  selectedProductId: null,
  loading: false,
  loaded: false,
  error: ''
});

export function reducer(state = initialState, action: actions.ProductActions): State {

  switch (action.type) {
    // Adding a single product
    case actions.ActionTypes.UPDATE_PRODUCT: {
      return <State>{ ...state, loaded: false, loading: true  };
    }

    case actions.ActionTypes.UPDATE_PRODUCT_SUCCESS: {
      return adapter.updateOne(
        <Update<Product>>action.payload.product,
        <State>{...state, loaded: true, loading: false }
      );
    }

    case actions.ActionTypes.UPDATE_PRODUCT_FAILED: {
      const _error: string = <string>action.payload;
      return <State>{ ...state, loaded: false, loading: false, error: _error };
    }

    // Loading product
    case actions.ActionTypes.LOADING_PRODUCTS: {
      return <State>{ ...state, loaded: false, loading: true };
    }

    case actions.ActionTypes.LOADING_PRODUCTS_SUCCESS: {
      return adapter.addAll(
        <Product[]>action.payload,
        <State>{ ...state, loaded: true, loading: false }
      );
    }

    case actions.ActionTypes.LOADING_PRODUCTS_FAIL: {
      return <State>{ ...state, loaded: false, loading: false, error: <string>action.payload };
    }

    default: {
      return state;
    }
  }

}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectProductIds = selectIds;

// select the dictionary of user entities
export const selectProductEntities = selectEntities;

// select the array of users
export const selectAllProducts = selectAll;

// select the total user count
export const selectProductTotal = selectTotal;
