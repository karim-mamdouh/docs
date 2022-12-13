import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@cic-garage/cic-core-library';
import { events, interfaces, properties } from './properties';

@Component({
  selector: 'cic-datatable-install',
  templateUrl: './datatable-install.component.html',
  styleUrls: ['./datatable-install.component.scss'],
})
export class DatatableInstallComponent implements OnInit {
  properties = properties;
  interfaces = interfaces;
  events = events;
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

  usage = `<cic-data-table [data]="tableData" [tableColumns]="columns"></cic-data-table>`;
  usageTs = `columns: Array<TableColumn> = [
    { title: 'First Name', type: 'text', dataKey: 'firstName' },
    { title: 'Active', type: 'switch', dataKey: 'active', switchConfig: { event: 'activeState' }},
    { title: 'Image', type: 'image', dataKey: 'image' },
    { title: 'Phone Number', type: 'text', dataKey: 'phone' },
    { title: 'URL', type: 'link', dataKey: 'url' },
    { title: 'Actions', type: 'button',
       btnConfig: [
        { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
        { icon: 'pi-trash', event: 'delete', severity: 'danger' },
      ],
    },
  ];`;
  constructor() {}

  ngOnInit(): void {}
}
