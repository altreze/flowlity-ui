/**
 * @Author: mouad
 * @Date:   2019-07-31T13:34:35+01:00
 * @Filename: product.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-01T15:57:24+01:00
 * @Copyright: Altreze SARL
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import * as components from './components';
// import * as pipes from './pipes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    components.ProductsComponent
    // pipes.FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
