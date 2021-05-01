import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiraMaiuscula'
})
export class PrimeiraMaiusculaPipe implements PipeTransform {

  transform(texto: string): string {
    let textoCorreto = texto.substring(0,1).toUpperCase()
    textoCorreto += texto.substring(1)
    return textoCorreto;
  }

}
