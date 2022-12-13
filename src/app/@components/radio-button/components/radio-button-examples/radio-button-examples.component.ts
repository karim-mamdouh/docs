import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralItem } from '@cic-garage/cic-core-library';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-radio-button-examples',
  templateUrl: './radio-button-examples.component.html',
  styleUrls: ['./radio-button-examples.component.scss'],
})
export class RadioButtonExamplesComponent implements OnInit {
  data: Array<GeneralItem> = [
    { key: 'red', value: '1' },
    { key: 'green', value: '2' },
    { key: 'black', value: '3' },
    { key: 'blue', value: '4' },
    { key: 'white', value: '5' },
  ];
  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}
  form: FormGroup = this._fb.group({
    city: [],
    textarea2: [
      {
        value: ` //HTML
<cic-radio-button controlName="city" [data]="data" class="radio" ></cic-radio-button>

 //TS
  data: Array<GeneralItem>  = [
 { key: 'red', value: '1' },{ key: 'green', value: '2' },
 { key: 'black', value: '3' },{ key: 'blue', value: '4' },
 { key: 'white', value: '5' },];`,
        disabled: true,
      },
    ],
  });
  ngOnInit() {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
