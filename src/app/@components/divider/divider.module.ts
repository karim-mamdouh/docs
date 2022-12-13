//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICDividerModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { DividersRoutingModule } from './divider-routing.module';
//Components
import { DividerComponent } from './components/divider/divider.component';
import { DividerExamplesComponent } from './components/divider-examples/divider-examples.component';

@NgModule({
  declarations: [DividerComponent, DividerExamplesComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    DividersRoutingModule,
    CICDividerModule,
  ],
})
export class DividersModule {}
