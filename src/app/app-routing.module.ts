import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PersonajeDetailsComponent } from './personajes/personaje-details/personaje-details.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent},
  {path:"personagens", component: PersonajesComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "personagens/:id", component: PersonajeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
