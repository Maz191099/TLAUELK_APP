import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter(item=>{
      if (item.name.toLowerCase().includes(texto)){
        return item.name.toLowerCase().includes(texto);
      }if (item.description.toLowerCase().includes(texto)){
        return item.description.toLowerCase().includes(texto);
      }
    });
  }

}
