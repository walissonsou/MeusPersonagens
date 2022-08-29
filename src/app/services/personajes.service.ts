import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PERSONAJES} from '../personajes/mock-personajes'
import { IPersonaje } from '../personajes/personajes.model';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  constructor(private messageService: MessageService){
  }

  getPersonaje(): Observable<IPersonaje[]> {
    const personajes = of(PERSONAJES)
    //o of ele transforma minha lista em um observable
    return personajes;
  }

}
