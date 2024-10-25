import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NuovoCollegaModalComponent} from '../../shared/modals/nuovo-collega-modal/nuovo-collega-modal.component';
import {StateService} from '../../core/services/state.service';
import {Developer} from '../../core/models/developer.model';
import {BehaviorSubject, combineLatestWith, map, take} from 'rxjs';


@Component({
  selector: 'app-gestore',
  templateUrl: './gestore.component.html',
  styleUrl: './gestore.component.scss'
})
export class GestoreComponent implements OnInit, OnDestroy{
  #stateService = inject(StateService);

  searchTerm$ = new BehaviorSubject<string | null>('');


  colleagues$ = this.searchTerm$.pipe(
    combineLatestWith(this.#stateService.colleagues),
    map(([value,colleagues,]) => {
      return value ? colleagues.filter(col => col.name.toLowerCase().includes(value)) : colleagues
    })
  );

  constructor() {
  }

  /*addMate(){
    this.#modalService.openModal(NuovoCollegaModalComponent).pipe(take(1)).subscribe(
      {
        next: (result) => result ? this.#stateService.addColleague(result) : null,
      }
    )
  }*/

  /*modify(colleague: Developer) {
    this.#modalService.openModal(NuovoCollegaModalComponent,{colleague}).pipe(take(1)).subscribe(
      {
        next: (result) => result ? this.#stateService.modifyColleague(result) : null,
      }
    )
  }*/

  get valueToSearch(){
    return null;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }


}
