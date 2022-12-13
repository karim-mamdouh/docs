import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-fieldset-install',
  templateUrl: './fieldset-install.component.html',
  styleUrls: ['./fieldset-install.component.scss'],
})
export class FieldsetInstallComponent implements OnInit {
  Basic = `<cic-fieldset [data]="data" ></cic-fieldset>`;
  constructor() {}

  ngOnInit() {}
}
