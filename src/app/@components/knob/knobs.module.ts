//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
  CICKnobModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { KnobsRoutingModule } from './knobs-routing.module';
//Components
import { KnobComponent } from './components/knob/knob.component';
import { KnobInstallComponent } from './components/knob-install/knob-install.component';
import { KnobExamplesComponent } from './components/knob-examples/knob-examples.component';

@NgModule({
  declarations: [KnobComponent, KnobInstallComponent, KnobExamplesComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    KnobsRoutingModule,
    CICKnobModule,
  ],
})
export class KnobsModule {}
