import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../personajes/personajes.model';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  personajes: IPersonaje[] = []

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes()
  }

  getPersonajes(): void{
    this.personajesService.getPersonaje().subscribe(personajes => this.personajes = personajes.slice(1, 5))
  }

}
