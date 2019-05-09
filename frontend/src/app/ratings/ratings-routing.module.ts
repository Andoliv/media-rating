import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RatingsComponent} from './ratings.component';

const routes: Routes = [
  {
    path: '',
    component: RatingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule {
}
