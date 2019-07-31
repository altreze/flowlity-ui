/**
 * @Author: mouad
 * @Date:   2019-07-31T17:29:47+01:00
 * @Filename: index.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T17:37:43+01:00
 * @Copyright: Altreze SARL
 */
 const typeCache: { [label: string]: boolean } = {};

 export function type<T>(label: T | ''): T {
   if (typeCache[<string>label]) {
     throw new Error(`Action type "${label}" is not unique"`);
   }

   typeCache[<string>label] = true;

   return <T>label;
 }
