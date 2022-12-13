import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-radio-button-install',
  templateUrl: './radio-button-install.component.html',
  styleUrls: ['./radio-button-install.component.scss'],
})
export class RadioButtonInstallComponent implements OnInit {
  Basic = ` <form [formGroup]="form">
    <cic-radio-button controlName="city" [data]="data" class="radio" ></cic-radio-button>
  </form>`;
  constructor() {}

  ngOnInit() {}
}
