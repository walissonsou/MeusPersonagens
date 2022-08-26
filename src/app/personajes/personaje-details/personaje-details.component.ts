import { Component, Input } from '@angular/core';
import { IPersonaje } from '../personajes.model';

@Component({
  selector: 'app-personaje-details',
  templateUrl: './personaje-details.component.html',
  styleUrls: ['./personaje-details.component.css']
})
export class PersonajeDetailsComponent{
  @Input() selectedPersonaje?: IPersonaje
  //  selectedPersonaje?: isso quer dizer que ele começa como undefined
}
