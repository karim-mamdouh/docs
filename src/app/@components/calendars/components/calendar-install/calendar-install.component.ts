import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@cic-garage/cic-core-library';
import { properties } from './properties';

@Component({
  selector: 'cic-calendar-install',
  templateUrl: './calendar-install.component.html',
  styleUrls: ['./calendar-install.component.scss'],
})
export class CalendarInstallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  propertyHeaders: Array<TableColumn> = [
    { title: 'Property Name', type: 'text', dataKey: 'name' },
    { title: 'Type', type: 'text', dataKey: 'type' },
    { title: 'Default Value', type: 'text', dataKey: 'defaultValue' },
    { title: 'Description', type: 'text', dataKey: 'description' },
  ];
  usage = `<form [formGroup]='form'>
  <cic-calendar controlName='formControl'></cic-calendar>
</form>`;
  properties = properties;
}
