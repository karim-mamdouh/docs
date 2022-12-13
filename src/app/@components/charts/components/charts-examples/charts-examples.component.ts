import { ToasterService } from '../../../../services/toaster/toaster.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cic-charts-examples',
  templateUrl: './charts-examples.component.html',
  styleUrls: ['./charts-examples.component.scss'],
})
export class ChartsExamplesComponent implements OnInit {
  value = 100;
  previousValue = 1000;
  _form: FormGroup = this.__fb.group({
    textarea1: [
      {
        value: ` <cic-charts [chartData]="data" [chartDimensions]="[600,300]" [showLegend]="true" [showXAxisLabel]="true" [showXAxis]="true"
    [gradient]="false" [showYAxis]="true" [showYAxisLabel]="true" [colorScheme]="colorScheme" legendTitle=" A countrys is a distinct part of the world."
    [xAxisLabel]="'Countrys'" [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar1: [
      {
        value: `<cic-charts mode="bar-horizontal-2d" [chartData]="multi" [chartDimensions]="[700,400]" [showLegend]="true" [showXAxisLabel]="true"
 [showXAxis]="true" [gradient]="false" [showYAxis]="true" [showYAxisLabel]="true" [colorScheme]="colorScheme" [schemeType]="'linear'"
 legendTitle=" A countrys is a distinct part of the world." [xAxisLabel]="'Countrys'" [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar2: [
      {
        value: ` <cic-charts mode="bar-horizontal" [chartData]="data" [chartDimensions]="[600,300]" [colorScheme]="colorScheme"
     [gradient]="false"  [showLegend]="true" [showYAxisLabel]="true" [showXAxisLabel]="true" [showXAxis]="true"
     [showYAxis]="true"[xAxisLabel]="'Countrys'"  [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar3: [
      {
        value: `<cic-charts mode="horizontal-normalized"[chartData]="multi" [chartDimensions]="[600,300]" [colorScheme]="colorScheme" [gradient]="true"
  [showLegend]="true" [showYAxisLabel]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true" [xAxisLabel]="'Countrys'" [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar4: [
      {
        value: ` <cic-charts mode="vertical-normalized" [chartData]="multi" [chartDimensions]="[600,300]" [colorScheme]="colorScheme"
         [gradient]="true" [showLegend]="true" [showYAxisLabel]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
         [xAxisLabel]="'Countrys'" [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar5: [
      {
        value: `<cic-charts mode="horizontal-stacked" [chartData]="multi" [chartDimensions]="[700,400]" [colorScheme]="colorScheme" [gradient]="false"
         [showLegend]="true" [showYAxisLabel]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true" [xAxisLabel]="'Countrys'"
         [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar6: [
      {
        value: ` <cic-charts mode="vertical-stacked" [chartData]="multi" [chartDimensions]="[700,400]" [colorScheme]="colorScheme" [gradient]="false"
         [showLegend]="true" [showYAxisLabel]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true" [xAxisLabel]="'Countrys'"
         [animations]="true" [yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    bar7: [
      {
        value: ` <cic-charts mode="bar-vertical-2d" [chartData]="multi" [chartDimensions]="[700,400]" [colorScheme]="colorScheme" [gradient]="true"
         [showLegend]="true" [showYAxisLabel]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true" [xAxisLabel]="'Countrys'"
         =[yAxisLabel]="'Frequency'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-charts mode="pie-chart"   [chartData]="data"  [showLegend]="true" [labels]="true" [gradient]="true"  [chartDimensions]="[600,200]"
         [colorScheme]="colorScheme" [isDoughnut]="false" legendTitle="Product Sale Report" [xAxisLabel]="'Countrys'" [yAxisLabel]="'pie-chart'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: ` <cic-charts mode="advanced-pie-chart" [gradient]=true [chartData]="data" [chartDimensions]="[600,200]"
         [colorScheme]="colorScheme" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `  <cic-charts mode="pie-grid"  [chartData]="data"  [chartDimensions]="[600,300]"
         [colorScheme]="colorScheme" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `   <cic-charts mode="gauge"  [showLegend]="true" [chartData]="data" [chartDimensions]="[500, 400]" [colorScheme]="colorScheme" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: ` <cic-charts mode="heat-map"  [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
        [showYAxisLabel]="true" [chartData]="multi" [chartDimensions]="[500, 400]" [colorScheme]="colorScheme" [yAxisLabel]="'Year'" [xAxisLabel]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `   <cic-charts mode="linear-gauge" [value]="value"  [chartDimensions]="[400, 300]" [colorScheme]="colorScheme" [previousValue]="previousValue"
        [xAxisLabel]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: `<cic-charts mode="pola" [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true" [showYAxisLabel]="true"
        [chartData]="multi" [chartDimensions]="[500, 300]" [colorScheme]="colorScheme" [yAxisLabel]="'Year'" [xAxisLabel]="'Country'"></cic-charts>`,
        disabled: true,
      },
    ],
    textarea9: [
      {
        value: `   <cic-charts mode="tree-map" [chartData]="data" [chartDimensions]="[500, 300]" [animations]="true"
        [colorScheme]="colorScheme" [legendTitle]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea10: [
      {
        value: `<cic-charts mode="number-card" [chartData]="data" [chartDimensions]="[500, 400]" textColor="white"
        [animations]="true" [colorScheme]="colorScheme" [cardColor]="'brown'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea11: [
      {
        value: ` <cic-charts mode="area-char" [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
        [showYAxisLabel]="true" [timeline]="true" [chartData]="multi" [chartDimensions]="[700, 400]" [colorScheme]="colorScheme"
         [yAxisLabel]="'Year'" [xAxisLabel]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea12: [
      {
        value: `<cic-charts mode="area-chart-normalized" [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
        [showYAxisLabel]="true" [timeline]="true" [chartData]="multi" [chartDimensions]="[700, 400]" [colorScheme]="colorScheme" [yAxisLabel]="'Year'"
        [xAxisLabel]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea13: [
      {
        value: `<cic-charts mode="area-chart-stacked" [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
        [showYAxisLabel]="true" [timeline]="true" [chartData]="multi" [chartDimensions]="[700, 400]" [colorScheme]="colorScheme"
       [yAxisLabel]="'Year'" [xAxisLabel]="'Country'"></cic-charts>`,
        disabled: true,
      },
    ],
    textarea14: [
      {
        value: `<cic-charts mode="line-chart" [showLegend]="true" [showXAxis]="true" [showYAxis]="true" [showXAxisLabel]="true"
        [showYAxisLabel]="true" [chartData]="multi" [chartDimensions]="[700, 300]" [colorScheme]="colorScheme" [yAxisLabel]="'Year'"
        [xAxisLabel]="'Country'" ></cic-charts>`,
        disabled: true,
      },
    ],
    textarea15: [
      {
        value: `  <cic-charts mode="bubble-chart" [chartDimensions]="[700, 400]" [colorScheme]="colorScheme" [chartData]="bubbleData"
        [showXAxis]="true" [showYAxis]="true" [showLegend]="true" [showXAxisLabel]="true" [showYAxisLabel]="true" [xAxisLabel]="'Population'"
        [yAxisLabel]="'Years'" [xScaleMin]="20" [xScaleMax]="20" [yScaleMin]="70" [yScaleMax]="85" [minRadius]="5" [maxRadius]="20"
         ></cic-charts>`,
        disabled: true,
      },
    ],
  });
  constructor(
    private __fb: FormBuilder,
    private toasterService: ToasterService
  ) {}
  colorScheme = {
    domain: ['#075249', '#0A6C61', 'red', '#0011ff', '#0ED9C3', '#16F7DD'],
  };
  colorSchemeAdvanced = {
    domain: ['#12C4B0', '#0ED9C3', '#16F7DD'],
  };
  ngOnInit() {}
  data = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'egypt',
      value: 9000000,
    },
    {
      name: 'cairo',
      value: 5000000,
    },
    {
      name: 'France',
      value: 9000000,
    },
    {
      name: 'KSA',
      value: 5000000,
    },
  ];
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000,
        },
        {
          name: '2010',
          value: 73000000,
        },
        {
          name: '2011',
          value: 89400000,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000,
        },
        {
          name: '2010',
          value: 309000000,
        },
        {
          name: '2011',
          value: 311000000,
        },
      ],
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000,
        },
        {
          name: '2010',
          value: 50000020,
        },
        {
          name: '2011',
          value: 58000000,
        },
      ],
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000,
        },
        {
          name: '2010',
          value: 62000000,
        },
        {
          name: '2011',
          value: 72000000,
        },
      ],
    },
  ];
  bubbleData = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.3,
          r: 80.4,
        },
        {
          name: '2000',
          x: '2000',
          y: 80.3,
          r: 78,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 79,
        },
      ],
    },
    {
      name: 'United States',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 78.8,
          r: 310,
        },
        {
          name: '2000',
          x: '2000',
          y: 76.9,
          r: 283,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 253,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 81.4,
          r: 63,
        },
        {
          name: '2000',
          x: '2000',
          y: 79.1,
          r: 59.4,
        },
        {
          name: '1990',
          x: '1990',
          y: 77.2,
          r: 56.9,
        },
      ],
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.2,
          r: 62.7,
        },
        {
          name: '2000',
          x: '2000',
          y: 77.8,
          r: 58.9,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.7,
          r: 57.1,
        },
      ],
    },
  ];
  clicked(control: string) {
    navigator.clipboard.writeText(this._form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
