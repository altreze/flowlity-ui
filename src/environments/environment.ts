/**
 * @Author: mouad
 * @Date:   2019-07-31T13:15:25+01:00
 * @Filename: environment.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T18:01:18+01:00
 * @Copyright: Altreze SARL
 */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:3000/api',
  api_version: 'application/json',
  delayMs: 3000
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
