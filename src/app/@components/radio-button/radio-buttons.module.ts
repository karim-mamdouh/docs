//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
  CICRadioButtonModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
//Components
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioButtonExamplesComponent } from './components/radio-button-examples/radio-button-examples.component';
import { RadioButtonInstallComponent } from './components/radio-button-install/radio-button-install.component';

@NgModule({
  declarations: [
    RadioButtonComponent,
    RadioButtonExamplesComponent,
    RadioButtonInstallComponent,
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
    RadioButtonsRoutingModule,
    CICRadioButtonModule,
  ],
})
export class RadioButtonsModule {}
