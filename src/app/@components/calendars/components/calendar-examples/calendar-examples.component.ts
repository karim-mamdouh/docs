import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-calendar-examples',
  templateUrl: './calendar-examples.component.html',
  styleUrls: ['./calendar-examples.component.scss'],
})
export class CalendarExamplesComponent implements OnInit {
  form: FormGroup = this._fb.group({
    basic: [],

    textarea1: [
      {
        value: `<cic-calendar controlName="basic" label="Basic Calendar"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-calendar controlName="basic" label="Basic Calendar" mode="time" placeholder='Pick time' [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `<cic-calendar controlName="basic" timeFormat="24" label="Basic Calendar" mode="time" placeholder='Pick time' [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-calendar controlName="basic" label="Month only" mode="month" placeholder="Pick month" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `<cic-calendar controlName="basic" label="Year only" mode="year" placeholder="Pick Year" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: `<cic-calendar controlName="basic" label="Date time format" mode="date-time" placeholder="Pick date" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `<cic-calendar controlName="basic" label="Date time format" mode="date-time" [showButtons]="true" [showCalendarIcon]="true" placeholder="Pick date" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: `<cic-calendar controlName="basic" label="Calendar with weeks" [showWeeks]="true" [showCalendarIcon]="true" placeholder="Pick date" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea9: [
      {
        value: `<cic-calendar controlName="basic" label="Range picker" mode="range" placeholder="Pick dates" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea10: [
      {
        value: `<cic-calendar controlName="basic" label="Editable calendar" [readOnly]="false" placeholder="Pick date" [floatLabel]="true"></cic-calendar>`,
        disabled: true,
      },
    ],
    textarea11: [
      {
        value: `<cic-calendar controlName="basic" label="Custom dateformat" placeholder="Pick date" [floatLabel]="true" dateFormat="dd-M-yy"></cic-calendar>`,
        disabled: true,
      },
    ],
  });
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
