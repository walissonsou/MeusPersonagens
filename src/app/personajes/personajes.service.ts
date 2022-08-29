import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PERSONAJES} from './mock-personajes'
import { IPersonaje } from './personajes.model';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  getPersonaje(): Observable<IPersonaje[]> {
    const personajes = of(PERSONAJES)
    //o of ele transforma minha lista em um observable
    return personajes;
  }

constructor() { }

}
