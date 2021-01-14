import { Component, OnInit } from '@angular/core';
import { Grupo } from '../Modelo/Grupo';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'administrar-grupo',
  templateUrl: './administrar-grupo.component.html',
  styleUrls: ['./administrar-grupo.component.css']
})
export class AdministrarGrupo implements OnInit{
  title = 'ProyectoAngular';
  grupoForm:Grupo
  grupos:Grupo[]=[]
  formulario:any
  constructor(private service:ServiceService){
    this.grupoForm=new Grupo();
  }
  ngOnInit(): void {
    this.service.getGrupos().subscribe(
      (lista: Grupo[])=>{this.grupos=lista
      }
    )
  }

  guardarGrupo(){
    this.service.postGrupo(this.grupoForm).subscribe((grupo: Grupo)=>{console.log(grupo)
      this.service.getGrupos().subscribe((lista: Grupo[])=>{this.grupos=lista})
    })
  }
}
