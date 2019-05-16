import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RatingsModule, RatingsService} from './ratings';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    RatingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
