import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingsComponent} from './ratings.component';
import {RatingsService} from './ratings.service';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RatingsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    RatingsService
  ],
  entryComponents: []

})
export class RatingsModule {
}
