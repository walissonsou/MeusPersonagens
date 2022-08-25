import { PERSONAJES } from './mock-personajes';
import { Component } from '@angular/core';
import { Personaje } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  Personaje: Personaje = {
    id: 1,
    name: 'Blanka',
    QI: 99
  }
  personajes = PERSONAJES;
  selectedPersonaje?: Personaje

  //  selectedPersonaje?: isso quer dizer que ele começa como undefined

  SearchDetail(personaje:Personaje): void{
    this.selectedPersonaje = personaje
  }
}
