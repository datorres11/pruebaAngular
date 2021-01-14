import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import 'rxjs';
import { Observable } from 'rxjs';
import { Grupo } from '../Modelo/Grupo';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  urla="http://localhost:8080/cliente";
  urlb="http://localhost:8080/grupo";

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urla);
  }

  postCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urla,cliente);
  }

  putCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.urla,cliente);
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.urla + '/' + id);
  }

  getGrupos():Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.urlb);
  }

  postGrupo(grupo:Grupo):Observable<Grupo>{
    return this.http.post<Grupo>(this.urlb,grupo);
  }
}
