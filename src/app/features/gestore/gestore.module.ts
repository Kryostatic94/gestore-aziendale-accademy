import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GestoreComponent} from './gestore.component';
import {GestoreRoutingModule} from './gestore-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';

@NgModule({
  imports: [SharedModule, GestoreRoutingModule, ReactiveFormsModule, CommonModule],
  declarations: [
    GestoreComponent
  ],
})
export class GestoreModule{}
