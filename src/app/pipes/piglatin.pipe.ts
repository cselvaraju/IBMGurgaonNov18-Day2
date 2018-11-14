import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) return '';
    if (value === '') return '';

    let words = value.trim().split(' ');
    for(var i = 0; i < words.length; ++i) {
      words[i] = words[i].slice(1) + words[i][0] + 'a';
    }
    return words.join(' ');
  }

}
