import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    // if (activar) {
    //   let letras = value.split("");

    //   for (let letra in letras) {
    //     letras[letra] = "*";
    //   }

    //   value = letras.join(" ");
    // }
    if (activar) {
      let letras: string = "";

      for (let i = 0; i < value.length; i++) {
        letras += "*";
      }

      value = letras;
    }
    return value;
  }
}
