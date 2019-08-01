/**
 * @Author: mouad
 * @Date:   2019-08-01T19:31:37+01:00
 * @Filename: graph.component.ts
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-02T00:28:02+01:00
 * @Copyright: Altreze SARL
 */

import { Component, Input, OnInit, OnChanges } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.sass']
})
export class GraphComponent implements OnInit, OnChanges {

  @Input() data: any;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    setTimeout(() => {
      Plotly.newPlot('myPlotlyDiv', [{
        ...this.data, type: 'bar', mode: 'lines+points', marker: {color: 'red'}
      }]);
    })

  }

}
