//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { ChartsRoutingModule } from './charts-routing.module';
import { CICChartsModule } from 'src/app/@cic-components/charts/charts.module';
//Components
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsExamplesComponent } from './components/charts-examples/charts-examples.component';

@NgModule({
  declarations: [ChartsComponent, ChartsExamplesComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    ChartsRoutingModule,
    CICChartsModule,
  ],
})
export class ChartsModule {}
