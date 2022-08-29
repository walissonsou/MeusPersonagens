import { Component, Input } from '@angular/core';
import { IPersonaje } from '../personajes.model';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje-details',
  templateUrl: './personaje-details.component.html',
  styleUrls: ['./personaje-details.component.css']
})
export class PersonajeDetailsComponent{
  @Input() personajeDetail?: IPersonaje
  //  selectedPersonaje?: isso quer dizer que ele começa como undefined

  constructor( private personajesService: PersonajesService){

  }
}
