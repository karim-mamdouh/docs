//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICCheckboxModule,
  CICDataTableModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { CheckboxRoutingModule } from './checkbox-routing.module';
//Components
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxInstallComponent } from './components/checkbox-install/checkbox-install.component';
import { CheckboxExamplesComponent } from './components/checkbox-examples/checkbox-examples.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxInstallComponent,
    CheckboxExamplesComponent,
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
    CheckboxRoutingModule,
    CICCheckboxModule,
  ],
})
export class CheckboxModule {}
