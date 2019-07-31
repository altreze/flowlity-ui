/**
 * @Author: mouad
 * @Date:   2019-02-16T17:34:08+01:00
 * @Filename: admin-routing.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:19:15+01:00
 * @Copyright: Altreze SARL
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers/product.reducer';
import * as effects from './effects';
import * as components from './components';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    component: components.ProductsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // NGRX Store
    StoreModule.forFeature('productsFeature', { products: reducer }),
    EffectsModule.forFeature([
      effects.ProductEffects
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
