import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-personaje',
  templateUrl: './message-personaje.component.html',
  styleUrls: ['./message-personaje.component.css']
})
export class MessagePersonajeComponent implements OnInit {

  constructor(public messageService: MessageService ) { }

  ngOnInit() {
  }

}
