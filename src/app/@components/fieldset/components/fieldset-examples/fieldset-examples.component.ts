import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldSetData } from '@cic-garage/cic-core-library';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-fieldset-examples',
  templateUrl: './fieldset-examples.component.html',
  styleUrls: ['./fieldset-examples.component.scss'],
})
export class FieldsetExamplesComponent implements OnInit {
  data: FieldSetData = {
    header: 'text1',
    content: ' ut labore et dolore magna ',
  };
  data2: FieldSetData = {
    header: 'text2',
    isToggleable: true,
    content: 'Lorem ipsum dolor bore et dolore magna ',
  };
  data3: Array<FieldSetData> = [
    {
      header: 'text3',
      isToggleable: false,
      content: 'Lorem ipsum dolor bore et dolore magna ',
    },
    {
      header: 'text4',
      isToggleable: true,
      content: 'Lorem ipsum dolor bore et dolore magna ',
    },
  ];

  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `//HTML
 <cic-fieldset [data]="data"></cic-fieldset>

//TS
data:FieldSetData={ header:'text1',content:'Lorem ipsum dolor bore et dolore magna'}
         `,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `//HTML
  <cic-fieldset [data]="data2"></cic-fieldset>

//TS
 data2:FieldSetData= {header:'text2',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}
         `,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `//HTML
  <cic-fieldset [data]="data2"></cic-fieldset>

//TS
 data3:Array<FieldSetData>= [
 {header:'text3',isToggleable:false,content:'Lorem ipsum dolor bore et dolore magna '},
 {header:'text4',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}]`,
        disabled: true,
      },
    ],
  });
  ngOnInit() {}
  constructor(
    private toasterService: ToasterService,
    private _fb: FormBuilder
  ) {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
