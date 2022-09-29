import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performanceConverter'
})
export class PerformanceConverterPipe implements PipeTransform {

  transform(value: number): string {

    if(value >= 90){
      return 'Excellent'
    }

    if(value >= 80 && value < 90){
      return 'Very good'
    }

    if(value >= 70 && value < 80){
      return 'Good'
    }
    if(value >= 60 && value < 70){
      return 'Regular'
    }

    if(value < 60){
      return 'Insufficient'
    }

    return "";
  }

}
