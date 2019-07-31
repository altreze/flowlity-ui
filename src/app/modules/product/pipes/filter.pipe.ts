/**
 * @Author: mouad
 * @Date:   2019-07-31T18:53:15+01:00
 * @Filename: filter.pipe.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T19:31:25+01:00
 * @Copyright: Altreze SARL
 */

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }


  transform(products: Product[], ...args: any[]): any {
    if (args) {
      return products;
    } else {
      let temp: Product[] = [];
      temp = products.filter((product: Product) => product.product_id === args[0]);
      console.log(args[0]);
      console.log(temp);

      return temp;
    }
  }

}
