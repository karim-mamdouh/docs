import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-image-examples',
  templateUrl: './image-examples.component.html',
  styleUrls: ['./image-examples.component.scss'],
})
export class ImageExamplesComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}
  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `<cic-image src="assets/image/galleria.jpg" width="250"></cic-image>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: ` <cic-image src="assets/image/galleria.jpg" width="250" [showPreview]="true"></cic-image>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `   <cic-image src="assets/image/galleria.jpg" width="450" [showPreview]="true" [customPreview]="true">
        any content <i class="pi pi-eye" style="font-size:1rem"></i></cic-image>`,
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
