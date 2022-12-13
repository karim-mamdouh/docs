import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@cic-garage/cic-core-library';
import { properties } from './properties';

@Component({
  selector: 'cic-input-install',
  templateUrl: './input-install.component.html',
  styleUrls: ['./input-install.component.scss'],
})
export class InputInstallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  usage = `<form [formGroup]='form'>
  <cic-input controlName='formControl'></cic-input>
</form>`;

  properties = properties;
  propertyHeaders: Array<TableColumn> = [
    { title: 'Property Name', type: 'text', dataKey: 'name' },
    { title: 'Type', type: 'text', dataKey: 'type' },
    { title: 'Default Value', type: 'text', dataKey: 'defaultValue' },
    { title: 'Description', type: 'text', dataKey: 'description' },
  ];
}
