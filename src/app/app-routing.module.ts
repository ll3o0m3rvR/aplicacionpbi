import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ListadoLinkComponent } from './listado-link/listado-link.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  {
    path: '', component : MenuComponent
  },
  {
    path: 'listar-link', component : ListadoLinkComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
