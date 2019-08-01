/**
 * @Author: mouad
 * @Date:   2019-07-31T13:34:35+01:00
 * @Filename: product.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-01T19:33:27+01:00
 * @Copyright: Altreze SARL
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import * as components from './components';

@NgModule({
  declarations: [
    components.ProductsComponent,
    components.GraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
