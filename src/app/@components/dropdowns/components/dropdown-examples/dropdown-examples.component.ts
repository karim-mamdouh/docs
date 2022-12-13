import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropDownItem } from '@cic-garage/cic-core-library';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-dropdown-examples',
  templateUrl: './dropdown-examples.component.html',
  styleUrls: ['./dropdown-examples.component.scss'],
})
export class DropdownExamplesComponent implements OnInit {
  form: FormGroup = this._fb.group({
    control: [],
    textarea1: [
      {
        value: `<cic-dropdown [data]="data" controlName="control" label="Countries" placeholder="Countries"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [autoComplete]="true"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [multiSelect]="true"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [enableFilter]="true"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [showClear]="true"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [multiSelect]="true" multiSelectMode="chip"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" mode="text-flag"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea9: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [roundedFlagIcon]="true" mode="text-flag" [multiSelect]="true"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea10: [
      {
        value: `<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" mode="text-icon"></cic-dropdown>`,
        disabled: true,
      },
    ],
    textarea11: [
      {
        value: `data: Array<DropDownItem> = [
          { key: 'Egypt', value: 'EG', iconName: 'pi pi-user' },
          { key: 'France', value: 'FR', iconName: 'pi pi-star' },
          { key: 'Saudi-Arabia', value: 'SA', iconName: 'pi pi-cog' },
          { key: 'Europe', value: 'EU', iconName: 'pi pi-heart' },
          { key: 'Iraq', value: 'IR', iconName: 'pi pi-check' },
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
  data: Array<DropDownItem> = [
    { key: 'Egypt', value: 'EG', iconName: 'pi pi-user' },
    { key: 'France', value: 'FR', iconName: 'pi pi-star' },
    { key: 'Saudi-Arabia', value: 'SA', iconName: 'pi pi-cog' },
    { key: 'Europe', value: 'EU', iconName: 'pi pi-heart' },
    { key: 'Iraq', value: 'IR', iconName: 'pi pi-check' },
  ];

  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
