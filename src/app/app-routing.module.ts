import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrarGrupo } from './administrar-Grupo/administrar-grupo.component';
import { AdministrarCLiente } from './administrarCliente/administrar-cliente.component';

const routes: Routes = [
  {path:'administrar-cliente', component:AdministrarCLiente},
  {path:'administrar-grupo', component:AdministrarGrupo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
