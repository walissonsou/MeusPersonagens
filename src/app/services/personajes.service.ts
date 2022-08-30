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

    //o of ele transforma minha lista em um observable
    const personajes = of(PERSONAJES)
    this.messageService.add("Personaje capturou personajes");
    return personajes;
  }

}
