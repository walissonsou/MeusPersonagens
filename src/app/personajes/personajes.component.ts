import { PERSONAJES } from './mock-personajes';
import { Component } from '@angular/core';
import { Personaje } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent  {

  Personaje: Personaje = {
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

  personajes = PERSONAJES;
  selectedPersonaje?: Personaje
  //  selectedPersonaje?: isso quer dizer que ele começa como undefined
  SearchDetail(personaje:Personaje): void{
    this.selectedPersonaje = personaje
  }
}
