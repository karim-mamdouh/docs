import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-knob-examples',
  templateUrl: './knob-examples.component.html',
  styleUrls: ['./knob-examples.component.scss'],
})
export class KnobExamplesComponent implements OnInit {
  number: number = 40;
  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `<cic-knob [value]="number"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-knob [value]="number" [readonly]="true"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `  <cic-knob [value]="number" [valueTemplate]="'%'"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-knob [value]="number" labe [minValue]="-90" [maxValue]="90"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `<cic-knob [value]="number" [strokeWidth]="20"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: `<cic-knob [value]="number" [step]="20"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `<cic-knob [value]="number" valueColor="yellow" rangeColor="blue"></cic-knob>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: ` <cic-knob [value]="number" [size]="200"></cic-knob>`,
        disabled: true,
      },
    ],
  });
  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
