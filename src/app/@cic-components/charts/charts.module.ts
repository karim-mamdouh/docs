import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CICChartsComponent } from './components/charts/charts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [CICChartsComponent],
  imports: [CommonModule,NgxChartsModule,ReactiveFormsModule],
  exports:[CICChartsComponent]
})
export class CICChartsModule { }
