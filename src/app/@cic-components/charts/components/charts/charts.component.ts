
import { Component, Input, OnInit } from '@angular/core';
import { ChartsMode, schemeType } from '../../models/charts-model';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'cic-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class CICChartsComponent implements OnInit {
//#region Declerations
public below: LegendPosition = LegendPosition.Below;
@Input() schemeType: schemeType|any='ordinal';
@Input() chartData: any;
//The dimensions of the chart [width, height].
@Input() chartDimensions!:[number, number];
@Input() xAxisLabel!:string;
//linear-gauge the value represented on the gauge
@Input() value!:number;
//linear-gauge the value represented by the vertical line on the gauge
@Input() previousValue!:number;
//The color scheme of the chart.
@Input() scheme!: string;
@Input() yAxisLabel!: string;
//number-card Color of the card backGround
@Input() cardColor!: string;
//number-card Color of the text Color
@Input() textColor!: string;
@Input() colorScheme: any;
@Input() colorSchemeAdvanced:any;
@Input() legendTitle!:string;
@Input() showXAxis!:boolean;
@Input() showYAxis!:boolean;
@Input() showXAxisLabel!:boolean;
@Input() showYAxisLabel!:boolean;
@Input() timeline!:boolean;
@Input() isDoughnut!:boolean;
@Input() animations!:boolean
@Input() yScaleMin!:number;
@Input() xScaleMin!:number;
@Input() minRadius!:number;
@Input() maxRadius!:number;
@Input() yScaleMax!:number;
@Input() xScaleMax!:number;
@Input() labels!:boolean;
@Input() gradient:boolean=false
@Input() showLegend:boolean=false

@Input() labelFormatting:string='';
  @Input() mode!: ChartsMode
   //#endregion declreation
  //#region Constructor
  constructor() { }
 //#endregion constructor
  //#region Life cycle hooks
  ngOnInit() {

  }
   labelFormat(c:any) {

    return `${(c.label)} ${this.labelFormatting!}`;
  }

  //#endregion Life cycle hooks
}
