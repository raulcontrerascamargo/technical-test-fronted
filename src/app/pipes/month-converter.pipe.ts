import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthConverter',
})
export class MonthConverterPipe implements PipeTransform {
  transform(value: number): string {
    const years: number = Math.floor(Number(value / 12));
    const months: number = value - 12 * years;

    if (years == 1) {
      return `${years} Año ${this.getMonths(months)}`;
    }
    if (years > 1) {
      return `${years} Años ${this.getMonths(months)}`;
    }
    return this.getMonths(months);
  }

  getMonths(months: number): string {
    if (months == 1) {
      return `${months} Mes`;
    }
    if (months > 1) {
      return `${months} Meses`;
    }
    return '';
  }
}
