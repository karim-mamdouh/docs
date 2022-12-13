import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  Basic = ` <cic-divider></cic-divider>`;
  constructor() {}

  ngOnInit() {}
}
