import {ChangeDetectorRef, inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Developer} from '../models/developer.model';

@Injectable({
    providedIn: 'root',
})
export class StateService {
  #colleagues = new BehaviorSubject<Developer[]>([]);

  addColleague(developer : Developer) {
    const colleagues = this.#colleagues.getValue();
    colleagues.push({
      id: crypto.randomUUID(),
      ...developer
    })
    this.#colleagues.next([...colleagues]);
  }

  modifyColleague(developer : Developer) {
    const savedState = [...this.#colleagues.getValue()];
    const colleagueIdx = savedState.findIndex(e => e.id === developer.id);
    const colleagueToAlter: Developer = savedState[colleagueIdx];
    savedState[colleagueIdx] = {id: colleagueToAlter.id, ...developer};
    this.#colleagues.next([...savedState]);
  }

  setAll(developers: Developer[]){
    this.#colleagues.next(developers)
  }

  get colleagues() {
    return this.#colleagues.asObservable();
  }

  get actualColleagues(){
    return this.#colleagues.getValue();
  }
}
