import { Injectable } from '@angular/core';
import {PERSONAJES} from './mock-personajes'
import { IPersonaje } from './personajes.model';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  getPersonaje(): IPersonaje[] {
    return PERSONAJES
  }

constructor() { }

}
