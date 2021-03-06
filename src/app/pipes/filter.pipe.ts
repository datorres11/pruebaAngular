import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultNombre=[];
    for(const cliente of value){
      if(cliente.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultNombre.push(cliente);
      }
    }
    return resultNombre;
  }

}
