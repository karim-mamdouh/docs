//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICCalendarModule,
  CICDataTableModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { CalendarsRoutingModule } from './calendars-routing.module';
//Components
import { CalendarsComponent } from './components/calendars/calendars.component';
import { CalendarExamplesComponent } from './components/calendar-examples/calendar-examples.component';
import { CalendarInstallComponent } from './components/calendar-install/calendar-install.component';

@NgModule({
  declarations: [
    CalendarsComponent,
    CalendarExamplesComponent,
    CalendarInstallComponent,
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
    CalendarsRoutingModule,
    CICCalendarModule,
  ],
})
export class CalendarsModule {}
