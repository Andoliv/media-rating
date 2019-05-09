import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingsComponent} from './ratings.component';
import {RatingsService} from './ratings.service';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatDialog,
  MatDialogRef,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    RatingsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [],
  providers: [
    RatingsService
  ],
  entryComponents: [
    ModalComponent
  ]

})
export class RatingsModule {
}
