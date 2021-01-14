import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Modelo/Cliente';
import { Grupo } from '../Modelo/Grupo';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'administrar-cliente',
  templateUrl: './administrar-cliente.component.html',
  styleUrls: ['./administrar-cliente.component.css']
})
export class AdministrarCLiente implements OnInit{
  title = 'ProyectoAngular';
  filterNombre="";
  clienteForm:Cliente
  clientes:Cliente[]=[]
  grupos:Grupo[]=[]
  formulario:any
  constructor(private service:ServiceService){
    this.clienteForm=new Cliente();
  }
  ngOnInit(): void {
    this.service.getClientes().subscribe(
      (lista: Cliente[])=>{this.clientes=lista
      }
    )

    this.service.getGrupos().subscribe(
      (lista: Grupo[])=>{this.grupos=lista
      }
    )
  }

  guardarCliente(){
    this.service.postCliente(this.clienteForm).subscribe((cliente: Cliente)=>{console.log(cliente)
      this.service.getClientes().subscribe((lista: Cliente[])=>{this.clientes=lista})
    })
    this.clienteForm=new Cliente()
  }

  eliminarCliente(cliente:Cliente){
    this.service.deleteCliente(cliente.id).subscribe((cliente: Cliente)=>{console.log(cliente)
      this.service.getClientes().subscribe((lista: Cliente[])=>{this.clientes=lista})
    });
  }
}
