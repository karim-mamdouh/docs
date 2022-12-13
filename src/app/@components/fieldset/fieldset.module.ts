//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICFieldSetModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { FieldsetsRoutingModule } from './fieldset-routing.module';
//Components
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { FieldsetExamplesComponent } from './components/fieldset-examples/fieldset-examples.component';
import { FieldsetInstallComponent } from './components/fieldset-install/fieldset-install.component';

@NgModule({
  declarations: [
    FieldsetComponent,
    FieldsetExamplesComponent,
    FieldsetInstallComponent,
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
    FieldsetsRoutingModule,
    CICFieldSetModule,
  ],
})
export class FieldsetsModule {}
