import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-divider-examples',
  templateUrl: './divider-examples.component.html',
  styleUrls: ['./divider-examples.component.scss'],
})
export class DividerExamplesComponent implements OnInit {
  constructor(
    private toasterService: ToasterService,
    private _fb: FormBuilder
  ) {}
  form: FormGroup = this._fb.group({
    textarea0: [
      {
        value: ` <cic-divider layout="horizontal"  ></cic-divider>`,
        disabled: true,
      },
    ],
    textarea1: [
      {
        value: `<cic-divider [align]="'center'" layout="horizontal"  label="Center"></cic-divider>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: ` <cic-divider label="icon" [align]="'center'" [mode]="'icon'" icon="pi-times" layout="horizontal" iconPos="right"></cic-divider>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: ` <cic-divider label="Header" layout="horizontal" [align]="'right'" [mode]="'badge'"></cic-divider>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: ` <cic-divider  mode="custom" [align]="'right'" layout="horizontal">
        <cic-button btnIcon="pi-copy" label="Button" ></cic-button> </cic-divider>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `   <cic-divider layout="vertical"  label="or" align="center"></cic-divider>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: ` <cic-divider layout="vertical" type="dashed" ></cic-divider>`,
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
