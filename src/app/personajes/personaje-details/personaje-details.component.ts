import { Component, Input } from '@angular/core';
import { Personaje } from '../personajes.model';

@Component({
  selector: 'app-personaje-details',
  templateUrl: './personaje-details.component.html',
  styleUrls: ['./personaje-details.component.css']
})
export class PersonajeDetailsComponent{
  @Input() personaje?: Personaje
  //  selectedPersonaje?: isso quer dizer que ele começa como undefined
}
