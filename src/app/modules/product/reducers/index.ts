/**
 * @Author: mouad
 * @Date:   2019-07-31T17:55:40+01:00
 * @Filename: index.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:57:14+01:00
 * @Copyright: Altreze SARL
 */
 /**
  * @Author: mouad
  * @Date:   2019-04-07T16:26:45+01:00
  * @Filename: index.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:57:14+01:00
  * @Copyright: Altreze SARL
  */

 import {
   createFeatureSelector,
   createSelector
 } from '@ngrx/store';

 import * as fromProduct from './product.reducer';

 // Products store state
 export const getProductFeatureState = createFeatureSelector<fromProduct.State>('products');

 export const getProducts = createSelector(
   getProductFeatureState,
   fromProduct.selectAllProducts
 );

 export const getProductsLoaded = createSelector(
   getProductFeatureState,
   (state: fromProduct.State) => state.loaded
 );

 export const getProductsLoading = createSelector(
   getProductFeatureState,
   (state: fromProduct.State) => state.loading
 );

 export const selectSelectedProductId = createSelector(
   getProductFeatureState,
   (state: fromProduct.State) => state.selectedProductId
 );

 export const getSelectedProduct = createSelector(
   getProductFeatureState,
   selectSelectedProductId,
   (products, selectId) => products.entities[selectId]
 );
