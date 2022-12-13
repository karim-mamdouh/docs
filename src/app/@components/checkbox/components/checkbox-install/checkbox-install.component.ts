import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-checkbox-install',
  templateUrl: './checkbox-install.component.html',
  styleUrls: ['./checkbox-install.component.scss'],
})
export class CheckboxInstallComponent implements OnInit {
  Basic = `<form [formGroup]="form">
  <cic-checkbox class="checkbox" [data]="categories"></cic-checkbox>
  </form>`;
  BasicWay = `<cic-checkbox  [value]="checked" [data]="categories"  class="checkbox" ></cic-checkbox>`;
  constructor() {}
  ngOnInit() {}
}
