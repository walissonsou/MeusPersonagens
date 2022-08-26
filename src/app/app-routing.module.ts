import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  {path:"personagens", component: PersonajesComponent}
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
