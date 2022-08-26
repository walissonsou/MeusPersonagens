import { PERSONAJES } from './mock-personajes';
import { Component } from '@angular/core';
import { IPersonaje } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent  {

  Personaje: IPersonaje = {
      id: 2,
      name: "Ryu",
      image: "https://i.imgur.com/9VLlOO1.png",
      localDeNascimento: "Japão",
      datadeNasc:  "21/07/1964",
      altura: "1,75 cm",
      peso: "85 kg",
      tipoSanguíneo: "A",
      estiloDeLuta: "Técnicas com raízes Ansatsuken"
  }

  personajesQueRecebeOMock = PERSONAJES;

  selectedPersonaje?: IPersonaje
    //selectedPersonaje?: isso quer dizer que ele começa como undefined

  SearchDetail(personaje:IPersonaje): void{
    this.selectedPersonaje = personaje
    // O SearchDetail recebe um personaje,  do tipo Ipersonaje ( interface)
    //
  }
}
