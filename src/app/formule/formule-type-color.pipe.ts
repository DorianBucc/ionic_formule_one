import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formuleTypeColor'
})
export class FormuleTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Red Bull Racing':
        color = 'blue darken-3';
        break;
      case 'Ferrari':
        color = 'red darken-2';
        break;
      case 'Mercedes':
        color = 'grey lighten-1';
        break;
      case 'McLaren':
        color = 'orange darken-2';
        break;
      case 'Alpine':
        color = 'blue accent-2';
        break;
      case 'Aston Martin':
        color = 'green darken-2';
        break;
      case 'AlphaTauri':
        color = 'deep-purple lighten-1';
        break;
      case 'Alfa Romeo':
        color = 'red accent-4';
        break;
      case 'Williams':
        color = 'blue lighten-2';
        break;
      case 'Haas':
        color = 'grey darken-2';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color; //classe de materialize permettant d'afficher un petit rond de couleur
  }
}
