import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@cic-garage/cic-core-library';
import { interfaces, properties } from './properties';

@Component({
  selector: 'cic-dropdown-install',
  templateUrl: './dropdown-install.component.html',
  styleUrls: ['./dropdown-install.component.scss'],
})
export class DropdownInstallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  usage = `<form [formGroup]="form">
  <cic-dropdown [data]="data" controlName="formControl"></cic-dropdown>
</form>`;
  properties = properties;
  interfaces = interfaces;
  propertyHeaders: Array<TableColumn> = [
    { title: 'Property Name', type: 'text', dataKey: 'name' },
    { title: 'Type', type: 'text', dataKey: 'type' },
    { title: 'Default Value', type: 'text', dataKey: 'defaultValue' },
    { title: 'Description', type: 'text', dataKey: 'description' },
  ];
  eventInterfaceHeaders: Array<TableColumn> = [
    { title: 'Property Name', type: 'text', dataKey: 'name' },
    { title: 'Type', type: 'text', dataKey: 'type' },
    { title: 'Description', type: 'text', dataKey: 'description' },
  ];
}
