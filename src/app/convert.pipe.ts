import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, toFixed: number = 2, fullName: boolean = false): any {
    if (value.toString().indexOf(',') > -1) {
      value = Number(value.split(',').join(''));
    } else {
      value = Number(value);
    }
    if (value >= 1e3) {
      // const units = ['K', 'M', 'B', 'T'];
      const fullUnits = ['Thousand', 'Million', 'Billion', 'Trillion'];
      const unit = Math.floor((value.toFixed(0).length - 1) / 3) * 3;
      const rem = '1e' + unit;
      const num = (value / Number(rem)).toFixed(toFixed);
      const unitname = fullUnits[Math.floor(unit / 3) - 1];
      // if (fullName) {
      //   unitname = fullUnits[Math.floor(unit / 3) - 1];
      // }
      return num + ' ' + unitname;
    }
    return value.toLocaleString();
  }
}
