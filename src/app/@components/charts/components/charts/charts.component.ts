import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  Basic = `  <cic-charts [chartData]="data" [chartDimensions]="[600,300]" [showLegend]="true" [showXAxisLabel]="true" [colorScheme]="colorScheme"
 [showXAxis]="true" [gradient]="false" [showYAxis]="true" [showYAxisLabel]="true" legendTitle=" A countrys is a distinct part of the world."
   [xAxisLabel]="'Countrys'" [yAxisLabel]="'Frequency'" ></cic-charts>`;
  ngOnInit() {}
}
