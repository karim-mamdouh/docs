import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-image-install',
  templateUrl: './image-install.component.html',
  styleUrls: ['./image-install.component.scss'],
})
export class ImageInstallComponent implements OnInit {
  Basic = `<cic-image src="assets/image/galleria.jpg" width="250"></cic-image>`;
  constructor() {}

  ngOnInit() {}
}
