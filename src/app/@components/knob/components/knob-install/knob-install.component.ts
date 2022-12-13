import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-knob-install',
  templateUrl: './knob-install.component.html',
  styleUrls: ['./knob-install.component.scss'],
})
export class KnobInstallComponent implements OnInit {
  Basic = `<cic-knob [value]='number'></cic-knob>`;
  constructor() {}

  ngOnInit() {}
}
