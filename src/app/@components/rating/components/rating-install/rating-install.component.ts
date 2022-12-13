import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-rating-install',
  templateUrl: './rating-install.component.html',
  styleUrls: ['./rating-install.component.scss'],
})
export class RatingInstallComponent implements OnInit {
  BasicForm = `<form [formGroup]="form" >
    <cic-rating controlName="number" [stars]="20"></cic-rating>
  </form>`;
  basicTowWay = `<cic-rating [value]="value" [stars]="20"></cic-rating>`;
  constructor() {}

  ngOnInit() {}
}
