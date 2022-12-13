import { ToasterService } from '../../../../services/toaster/toaster.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent implements OnInit {
  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: ` ///Html
         <cic-fieldset [data]="data"></cic-fieldset>

         ///Ts
         data:FieldSetData={ header:'text1',content:'Lorem ipsum dolor bore et dolore magna'}
         `,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `//Html
         <cic-fieldset [data]="data2"></cic-fieldset>

         ///Ts
         data2:FieldSetData= {header:'text2',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}
         `,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `//Html
         <cic-fieldset [data]="data2"></cic-fieldset>

         ///Ts
         data3:Array<FieldSetData>= [
          {header:'text3',isToggleable:false,content:'Lorem ipsum dolor bore et dolore magna '},
          {header:'text4',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}
         ]

         `,
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
