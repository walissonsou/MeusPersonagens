import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeDetailsComponent } from './personajes/personaje-details/personaje-details.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import { MessagePersonajeComponent } from './message-personaje/message-personaje.component';
import { MatExpansionModule } from '@angular/material/expansion'
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonajeDetailsComponent,
    HomeComponent,
    MessagePersonajeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
