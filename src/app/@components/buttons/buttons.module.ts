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
import { ButtonsRoutingModule } from './buttons-routing.module';
//Components
import { ButtonInstallComponent } from './components/button-install/button-install.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonExamplesComponent } from './components/button-examples/button-examples.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonExamplesComponent,
    ButtonInstallComponent,
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
    ButtonsRoutingModule,
  ],
})
export class ButtonsModule {}
