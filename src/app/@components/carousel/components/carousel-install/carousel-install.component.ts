import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cic-carousel-install',
  templateUrl: './carousel-install.component.html',
  styleUrls: ['./carousel-install.component.scss']
})
export class CarouselInstallComponent implements OnInit {
  Basic=`<cic-carousel [data]="images"[numVisible]="3"[numScroll]="3"[circular]="false"></cic-carousel>`
  constructor() { }

  ngOnInit() {
  }

}
