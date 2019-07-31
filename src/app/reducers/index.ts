/**
 * @Author: mouad
 * @Date:   2019-01-12T16:54:01+01:00
 * @Filename: index.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:24:39+01:00
 * @Copyright: Altreze SARL
 */

import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromProduct from '../modules/product/reducers/product.reducer';

// Functions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

// Store Management
export interface AppState {
  products: fromProduct.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProduct.reducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [logger, storeFreeze] : [];
