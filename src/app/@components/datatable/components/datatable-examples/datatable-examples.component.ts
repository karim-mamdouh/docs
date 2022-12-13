import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableColumn } from '@cic-garage/cic-core-library';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-datatable-examples',
  templateUrl: './datatable-examples.component.html',
  styleUrls: ['./datatable-examples.component.scss'],
})
export class DatatableExamplesComponent implements OnInit {
  headers: Array<TableColumn> = [
    { title: 'First Name', type: 'text', dataKey: 'firstName' },
    {
      title: 'Active',
      type: 'switch',
      dataKey: 'active',
      switchConfig: { event: 'activeState' },
    },
    { title: 'Image', type: 'image', dataKey: 'image' },
    { title: 'Phone Number', type: 'text', dataKey: 'phone' },
    { title: 'URL', type: 'link', dataKey: 'url' },
    {
      title: '',
      type: 'button',
      btnConfig: [
        { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
        { icon: 'pi-trash', event: 'delete', severity: 'danger' },
      ],
    },
  ];

  data = [
    {
      firstName: 'Abdelrahman',
      active: true,
      phone: '01234567890',
      id: 1,
      url: 'https://www.google.com/',
      image:
        'https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      firstName: 'Karim',
      active: false,
      phone: '01234567890',
      id: 2,
      url: 'https://www.amazon.eg/',
      image:
        'https://images.pexels.com/photos/10679233/pexels-photo-10679233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      firstName: 'Ahmed',
      active: true,
      phone: '01234567890',
      id: 3,
      url: 'https://eshtriaqar.com.eg/en',
      image:
        'https://images.pexels.com/photos/14437082/pexels-photo-14437082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      firstName: 'Mohamed',
      active: false,
      phone: '01234567890',
      url: 'http://cic.ae/',
      id: 4,
      image:
        'https://images.pexels.com/photos/10679212/pexels-photo-10679212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      firstName: 'Mostafa',
      url: 'https://primefaces.org/primeng/',
      active: false,
      phone: '01234567890',
      id: 5,
      image:
        'https://images.pexels.com/photos/10111456/pexels-photo-10111456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      firstName: 'Assaf',
      active: false,
      phone: '01234567890',
      id: 6,
      image:
        'https://images.pexels.com/photos/12485401/pexels-photo-12485401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `<cic-data-table [data]="data" [tableColumns]="headers" captionMessage="Table Caption" summaryMessage="Table Summary" (stateChange)="clicked($event)" [paginate]="true" [rowsCountPerPage]="3" [rowsPerPageOptions]="[3, 5]" [hasAddButton]="true" [isScrollable]="true" [scrollHeight]="250"></cic-data-table>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `headers: Array<TableColumn> = [
          { title: 'First Name', type: 'text', dataKey: 'firstName' },
          {
            title: 'Active',
            type: 'switch',
            dataKey: 'active',
            switchConfig: { event: 'activeState' },
          },
          { title: 'Image', type: 'image', dataKey: 'image' },
          { title: 'Phone Number', type: 'text', dataKey: 'phone' },
          { title: 'URL', type: 'link', dataKey: 'url' },
          {
            title: '',
            type: 'button',
            btnConfig: [
              { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
              { icon: 'pi-trash', event: 'delete', severity: 'danger' },
            ],
          },
        ];
      
        data = [
          {
            firstName: 'Abdelrahman',
            active: true,
            phone: '01234567890',
            id: 1,
            url: 'https://www.google.com/',
            image:
              'https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            firstName: 'Karim',
            active: false,
            phone: '01234567890',
            id: 2,
            url: 'https://www.amazon.eg/',
            image:
              'https://images.pexels.com/photos/10679233/pexels-photo-10679233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            firstName: 'Ahmed',
            active: true,
            phone: '01234567890',
            id: 3,
            url: 'https://eshtriaqar.com.eg/en',
            image:
              'https://images.pexels.com/photos/14437082/pexels-photo-14437082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            firstName: 'Mohamed',
            active: false,
            phone: '01234567890',
            url: 'http://cic.ae/',
            id: 4,
            image:
              'https://images.pexels.com/photos/10679212/pexels-photo-10679212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          },
          {
            firstName: 'Mostafa',
            url: 'https://primefaces.org/primeng/',
            active: false,
            phone: '01234567890',
            id: 5,
            image:
              'https://images.pexels.com/photos/10111456/pexels-photo-10111456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          },
          {
            firstName: 'Assaf',
            active: false,
            phone: '01234567890',
            id: 6,
            image:
              'https://images.pexels.com/photos/12485401/pexels-photo-12485401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        ];`,
        disabled: true,
      },
    ],
  });
  constructor(
    private _fb: FormBuilder,
    public toasterService: ToasterService
  ) {}

  ngOnInit(): void {}
  clicked(e: any) {
    this.toasterService.toggleToaster('Clicked ID: ' + e.state.id);
  }
  copyToClip(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
