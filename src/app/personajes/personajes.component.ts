import { Component, OnInit } from '@angular/core';
import { Personaje } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  Personaje: Personaje = {
    id: 1,
    name: 'Blanka',
    QI: 99
  }

  constructor() { }

  ngOnInit(): void {
  }

}
