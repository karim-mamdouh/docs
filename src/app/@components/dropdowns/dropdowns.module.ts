//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICDropdownModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { DropdownsRoutingModule } from './dropdowns-routing.module';
//Components
import { DropdownsComponent } from './components/dropdown/dropdowns.component';
import { DropdownExamplesComponent } from './components/dropdown-examples/dropdown-examples.component';
import { DropdownInstallComponent } from './components/dropdown-install/dropdown-install.component';

@NgModule({
  declarations: [
    DropdownsComponent,
    DropdownExamplesComponent,
    DropdownInstallComponent,
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
    DropdownsRoutingModule,
    CICDropdownModule,
  ],
})
export class DropdownsModule {}
