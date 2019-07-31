/**
 * @Author: mouad
 * @Date:   2019-07-31T16:57:21+01:00
 * @Filename: product.model.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:00:57+01:00
 * @Copyright: Altreze SARL
 */

export interface Product {
  product_id: number;
  product_name: string;
  date: string;
  inventory_level: number;
}
