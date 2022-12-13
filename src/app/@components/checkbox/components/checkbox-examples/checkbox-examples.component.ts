import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralItem } from '@cic-garage/cic-core-library';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss'],
})
export class CheckboxExamplesComponent implements OnInit {
  checked = 'true';
  categories: Array<GeneralItem> = [
    { key: 'Accounting', value: 'A' },
    { key: 'Marketing', value: 'M' },
    { key: 'Production', value: 'P' },
    { key: 'Research', value: 'R' },
  ];
  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}
  form: FormGroup = this._fb.group({
    data: [],
    textarea1: [
      {
        value: `<cic-checkbox class="checkbox" [data]="categories"></cic-checkbox>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-checkbox  [value]="checked" [data]="categories"  class="checkbox" ></cic-checkbox>`,
        disabled: true,
      },
    ],
  });
  ngOnInit() {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
  textValue(value: any) {
    console.log(value);
  }
}
