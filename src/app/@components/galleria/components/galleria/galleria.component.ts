import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss'],
})
export class GalleriaComponent implements OnInit {
  Basic = ` <cic-galleria [data]="images" [numVisible]="4" [style]="{'width': '600px'}"></cic-galleria>`;
  ngOnInit(): void {}
}
