import { Component, OnInit } from '@angular/core';
import { IPersonaje } from './personajes.model';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: IPersonaje[] = []

  selectedPersonaje?: IPersonaje
    //selectedPersonaje?: isso quer dizer que ele começa como undefined


  constructor(private personajesService: PersonajesService){

  }
  ngOnInit(): void {
    this.getPersonajes()

  }
  getPersonajes(){
   this.personajesService.getPersonaje().subscribe(
    perso => this.personajes = perso
   )
  }

  SearchDetail(personaje:IPersonaje): void{
    this.selectedPersonaje = personaje
    // O SearchDetail recebe um personaje,  do tipo Ipersonaje ( interface)
    // digo que o selectedPersonaje recebe o personaje que foi passado clicado lá.
  }
}
