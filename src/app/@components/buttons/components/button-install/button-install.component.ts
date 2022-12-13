import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@cic-garage/cic-core-library';
import { properties } from './properties';

@Component({
  selector: 'cic-button-install',
  templateUrl: './button-install.component.html',
  styleUrls: ['./button-install.component.scss'],
})
export class ButtonInstallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  usage = '<cic-button label="Button"></cic-button>';
  propertyHeaders: Array<TableColumn> = [
    { title: 'Property Name', type: 'text', dataKey: 'name' },
    { title: 'Type', type: 'text', dataKey: 'type' },
    { title: 'Default Value', type: 'text', dataKey: 'defaultValue' },
    { title: 'Description', type: 'text', dataKey: 'description' },
  ];
  properties = properties;
}
