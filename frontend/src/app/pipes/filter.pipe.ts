import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...arg: any): any {
    const resultArray = [];
    for (const receipt of value) {
      if(receipt.name.toLowerCase().toUpperCase().indexOf(arg) > -1 ){
        resultArray.push(receipt);
      };
    };
    return resultArray;
  }
}
