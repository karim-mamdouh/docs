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
import { InputsRoutingModule } from './inputs-routing.module';
//Components
import { InputsComponent } from './components/inputs/inputs.component';
import { InputInstallComponent } from './components/input-install/input-install.component';
import { InputExamplesComponent } from './components/input-examples/input-examples.component';

@NgModule({
  declarations: [
    InputsComponent,
    InputInstallComponent,
    InputExamplesComponent,
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
    InputsRoutingModule,
  ],
})
export class InputsModule {}
