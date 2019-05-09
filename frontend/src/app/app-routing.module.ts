import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RatingsComponent} from './ratings/ratings.component';

const routes: Routes = [
  {
    path: 'ratings',
    component: RatingsComponent
  },
  {
    path: '',
    redirectTo: 'ratings',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'ratings'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
