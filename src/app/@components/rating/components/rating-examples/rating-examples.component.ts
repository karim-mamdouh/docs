import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-rating-examples',
  templateUrl: './rating-examples.component.html',
  styleUrls: ['./rating-examples.component.scss'],
})
export class RatingExamplesComponent implements OnInit {
  value = 10;
  form: FormGroup = this._fb.group({
    number: [4],
    textarea1: [
      {
        value: `<cic-rating controlName="number" [stars]="10" [cansel]="true"></cic-rating>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-rating controlName="number" [stars]="10"[readonly]="true" [cansel]="false"></cic-rating>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `<cic-rating controlName="number" [stars]="10"[readonly]="true" [disabled]="true" [cansel]="true"></cic-rating>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-rating controlName="number" [stars]="10" [showCancel]="true" cancelIconClass="pi-times" onIconClass="pi-heart-fill" offIconClass="pi-heart" ></cic-rating>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `<cic-rating [value]="value" [stars]="20" [showCancel]="true" cancelIconClass="pi-minus-circle" onIconClass="pi-heart-fill" offIconClass="pi-heart" ></cic-rating>`,
        disabled: true,
      },
    ],
  });

  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
  ngOnInit() {}
}
