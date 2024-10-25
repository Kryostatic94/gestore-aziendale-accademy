import {Component, Inject, inject} from '@angular/core';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-nuovo-collega-modal',
  templateUrl: './nuovo-collega-modal.component.html',
  styleUrl: './nuovo-collega-modal.component.scss',
  providers: [provideNativeDateAdapter(),{provide: MAT_DATE_LOCALE, useValue: 'it-It'},]
})
export class NuovoCollegaModalComponent {

}
