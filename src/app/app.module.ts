/**
 * @Author: mouad
 * @Date:   2019-07-31T13:15:25+01:00
 * @Filename: app.module.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T23:03:08+01:00
 * @Copyright: Altreze SARL
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from './shared/shared.module';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    // Importing shared modules
    SharedModule.forRoot(),

    // App Routing Module
    AppRoutingModule,

    // NGRX Store
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // Effects
    EffectsModule.forRoot([])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
