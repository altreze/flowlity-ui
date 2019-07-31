/**
 * @Author: mouad
 * @Date:   2019-07-31T13:15:25+01:00
 * @Filename: app-routing.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T16:45:11+01:00
 * @Copyright: Altreze SARL
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
