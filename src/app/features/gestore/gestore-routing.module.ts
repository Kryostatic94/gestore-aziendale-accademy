import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {GestoreComponent} from './gestore.component';

const routes: Route[] = [
  {
    path: '',
    component: GestoreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestoreRoutingModule { }
