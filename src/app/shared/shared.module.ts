/**
 * @Author: mouad
 * @Date:   2019-07-31T13:22:13+01:00
 * @Filename: shared.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T18:06:39+01:00
 * @Copyright: Altreze SARL
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
import * as services from './services';

@NgModule({
  declarations: [
    components.LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components.LoadingSpinnerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        services.ApiService,
        services.ProductService
      ]
    };
  }
}
