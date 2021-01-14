import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngularV';

  constructor(private router:Router){}
  administrarClientes(){
    this.router.navigate(["administrar-cliente"])
  }

  administrarGrupos(){
    this.router.navigate(["administrar-grupo"])
  }
}
