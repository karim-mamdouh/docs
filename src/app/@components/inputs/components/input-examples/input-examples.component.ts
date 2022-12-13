import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-input-examples',
  templateUrl: './input-examples.component.html',
  styleUrls: ['./input-examples.component.scss'],
})
export class InputExamplesComponent implements OnInit {
  form: FormGroup = this._fb.group({
    basic: [],
    floatLabel: [],
    withIcon: [],
    password: [],
    chip: [],
    size: [],
    textarea1: [
      {
        value: `<cic-input controlName="basic" placeholder="Basic Input" label="Basic"></cic-input>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-input controlName="floatLabel" [floatLabel]="true" label="Input with floatlabel" placeholder="Input with floatlabel"></cic-input>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `// iconPos="left" (default value)  OR 'right'
<cic-input controlName="withIcon" label="Input with Icon & float label" placeholder="Input with Icon" icon="pi-search" [floatLabel]="true" iconPos="left"></cic-input>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-input type="password" controlName="password" label="Password Input" placeholder="Password Input" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `<cic-input type="chips" controlName="chip" label="Chips Input" placeholder="Chips Input" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: `<cic-input controlName="size" placeholder="Large size" label="Large size" size="lg" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `<cic-input controlName="size" placeholder="Small size" label="Small size" size="sm" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: `<cic-input type="password" controlName="password" label="Password Input" [toggleMask]="true" placeholder="Password Input" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea9: [
      {
        value: `<cic-input type="password" controlName="password" label="Password Input" [passwordFeedback]="false" placeholder="Password Input" [floatLabel]="true"></cic-input>`,
        disabled: true,
      },
    ],
    textarea10: [
      {
        value: `<cic-input controlName="basic" [floatLabel]="true" placeholder="Textarea Input" label="Textarea" type="textarea"></cic-input>`,
        disabled: true,
      },
    ],
  });
  showToast = false;
  constructor(
    private _fb: FormBuilder,
    public toasterService: ToasterService
  ) {}

  ngOnInit(): void {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
