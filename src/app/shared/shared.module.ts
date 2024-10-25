import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {ModalsModule} from './modals/modals.module';

@NgModule({
  imports: [MaterialModule, ModalsModule],
  exports: [MaterialModule,ModalsModule]
})
export class SharedModule {
}
