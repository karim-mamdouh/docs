import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/@cic-components/carousel/product';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-carousel-examples',
  templateUrl: './carousel-examples.component.html',
  styleUrls: ['./carousel-examples.component.scss'],
})
export class CarouselExamplesComponent implements OnInit {
  images: Array<Products> = [
    {
      id: '1',
      name: 'Galleria',
      image: 'galleria.jpg',
      inventoryStatus: 'Racing Galleria',
      price: 800,
    },
    {
      id: '2',
      name: 'Boat',
      image: 'boat.jpg',
      inventoryStatus: 'Racing Boat',
      price: 1800,
    },
    {
      id: '3',
      name: 'Moon',
      image: 'moon.jpg',
      inventoryStatus: 'Racing Moon',
      price: 18000,
    },
    {
      id: '4',
      name: 'Sea',
      image: 'sea.jpg',
      inventoryStatus: 'Racing sea',
      price: 180000,
    },
    {
      id: '5',
      name: 'Basket Ball',
      image: 'basketball.jpg',
      inventoryStatus: 'Racing Basket Ball',
      price: 1800,
    },
    {
      id: '2',
      name: 'Boat',
      image: 'boat.jpg',
      inventoryStatus: 'Racing Boat',
      price: 1800,
    },
    {
      id: '3',
      name: 'Moon',
      image: 'moon.jpg',
      inventoryStatus: 'Racing Moon',
      price: 18000,
    },
    {
      id: '4',
      name: 'Sea',
      image: 'sea.jpg',
      inventoryStatus: 'Racing sea',
      price: 180000,
    },
    {
      id: '5',
      name: 'Basket Ball',
      image: 'basketball.jpg',
      inventoryStatus: 'Racing Basket Ball',
      price: 1800,
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1520px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '1000px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '850px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `<cic-carousel [data]="images"[numVisible]="3"[numScroll]="3"[circular]="false"></cic-carousel>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `<cic-carousel [data]="images"[numVisible]="3"[numScroll]="3" [autoplayInterval]="2000" [circular]="true"></cic-carousel>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `<cic-carousel [data]="images" [style]="{'max-width':'400px', 'margin-top':'2em'}"
        verticalViewPortHeight="352px" [numVisible]="1" [numScroll]="1"
         [mode]="'vertical'" [autoplayInterval]="0" [circular]="true"></cic-carousel>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `<cic-carousel [data]="images"[circular]="false" [numScroll]="0" [responsiveOptions]="responsiveOptions"></cic-carousel>`,
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
