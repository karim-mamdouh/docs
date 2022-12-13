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
import { DatatableRoutingModule } from './datatable-routing.module';
//Components
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatatableExamplesComponent } from './components/datatable-examples/datatable-examples.component';
import { DatatableInstallComponent } from './components/datatable-install/datatable-install.component';

@NgModule({
  declarations: [
    DatatableComponent,
    DatatableExamplesComponent,
    DatatableInstallComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    DatatableRoutingModule,
  ],
})
export class DatatableModule {}
