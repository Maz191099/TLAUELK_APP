import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter(item=>{
      if (item.name.toLowerCase().includes(texto)){
        return item.name.toLowerCase().includes(texto);
      }if (item.direction.toLowerCase().includes(texto)){
        return item.direction.toLowerCase().includes(texto);
      }
    });
  }

}
