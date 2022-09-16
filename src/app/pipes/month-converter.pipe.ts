import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthConverter',
})
export class MonthConverterPipe implements PipeTransform {
  transform(value: number): string {
    const years: number = Math.floor(Number(value / 12));
    const months: number = value - 12 * years;

    if (years >= 1) {
      return years == 1
        ? `${years} Año ${
            months == 1 ? months + ' Mes' : months != 0 ? months + ' Meses' : ''
          }`
        : `${years} Años ${
            months == 1 ? months + ' Mes' : months != 0 ? months + ' Meses' : ''
          }`;
    } else {
      return `${months == 1 ? months + ' Mes' : months + ' Meses'}`;
    }
  }
}
