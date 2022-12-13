import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-editor-examples',
  templateUrl: './editor-examples.component.html',
  styleUrls: ['./editor-examples.component.scss'],
})
export class EditorExamplesComponent implements OnInit {
  form: FormGroup = this._fb.group({
    data: [],
    textarea1: [
      {
        value: `<cic-editor controlName="data" placeholder="Add any Text" [readonly]="false" [styleClass]="'styleEditor'"></cic-editor>`,
        disabled: true,
      },
    ],
  });
  constructor(
    private toasterService: ToasterService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {}

  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
