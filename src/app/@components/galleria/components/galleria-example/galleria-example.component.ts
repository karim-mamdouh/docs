import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from 'src/app/@cic-components/galleria/models/galleria.model';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'cic-galleria-example',
  templateUrl: './galleria-example.component.html',
  styleUrls: ['./galleria-example.component.scss'],
})
export class GalleriaExampleComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private toasterService: ToasterService
  ) {}

  form: FormGroup = this._fb.group({
    basic: [],

    textarea1: [
      {
        value: ` <cic-galleria [data]="images"  [numVisible]="4"   ></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `  <cic-galleria [data]="images" [responsiveOptions]="responsiveOptions" ></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `  <cic-galleria [data]="images"[numVisible]="3"  thumbnailsPosition="top" [style]="{'width': '600px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: ` <cic-galleria [data]="images"[transitionInterval]="2000" [numVisible]="4"  [autoPlay]="true" [style]="{'width': '600px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: ` <cic-galleria[data]="images"[circular]="true"[showThumbnails]="false"[showItemNavigators]="true"[numVisible]="4"
          [style]="{'width': '65%'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea6: [
      {
        value: ` <cic-galleria [data]="images"  [numVisible]="4" [mode]="'programmatic'"  [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea7: [
      {
        value: `<cic-galleria [mode]="'Indicators'" [data]="images" [numVisible]="4" [showThumbnails]="false" [showIndicators]="true"  [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea8: [
      {
        value: `  <cic-galleria [data]="images" [numVisible]="4" [mode]="'Indicators'" [changeItemOnIndicatorHover]="true" [showThumbnails]="false" [showIndicators]="true" [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea9: [
      {
        value: `  <cic-galleria [mode]="'Indicators'" [data]="images" [numVisible]="4"  [changeItemOnIndicatorHover]="true"  [showThumbnails]="false"
        [showIndicators]="true" [style]="{'width': '500px'}"></cic-galleria`,
        disabled: true,
      },
    ],
    textarea10: [
      {
        value: `  <cic-galleria[mode]="'Indicators'" [data]="images" [showIndicatorsOnItem]="true" [numVisible]="4" [changeItemOnIndicatorHover]="false"
        [showThumbnails]="false" [showIndicators]="true"  [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea11: [
      {
        value: `  <cic-galleria [mode]="'indicatorsPosition'" [data]="images" [showIndicatorsOnItem]="true"  [numVisible]="4" [changeItemOnIndicatorHover]="false"
        indicatorsPosition="top" [showThumbnails]="false"  [showIndicators]="true" [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea12: [
      {
        value: `  <cic-galleria [mode]="'fullScreen'"  [data]="images"  [numVisible]="4"  [fullScreen]="true"  [showThumbnails]="true" [showItemNavigators]="true"
         [circular]="true" [baseZIndex]="100000"  [style]="{'width': '500px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
    textarea13: [
      {
        value: `  <cic-galleria [mode]="'fullScreenCustom'"  [data]="images"  [numVisible]="4" [fullScreen]="true"  [showThumbnails]="false"
        [showItemNavigators]="true" [circular]="true" [baseZIndex]="100000"  [style]="{'max-width': '850px'}"></cic-galleria>`,
        disabled: true,
      },
    ],
  });
  ngOnInit() {}
  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
  images: Array<data> = [
    {
      previewImageSrc: 'assets/image/galleria.jpg',
      thumbnailImageSrc: 'assets/image/galleriaS.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: 'assets/image/boat.jpg',
      thumbnailImageSrc: 'assets/image/boatS.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: 'assets/image/basketball.jpg',
      thumbnailImageSrc: 'assets/image/basketballS.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },

    {
      previewImageSrc: 'assets/image/moon.jpg',
      thumbnailImageSrc: 'assets/image/moonS.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      previewImageSrc: 'assets/image/sea.jpg',
      thumbnailImageSrc: 'assets/image/seaS.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
    {
      previewImageSrc: 'assets/image/galleria.jpg',
      thumbnailImageSrc: 'assets/image/galleriaS.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6',
    },
    {
      previewImageSrc: 'assets/image/boat.jpg',
      thumbnailImageSrc: 'assets/image/boatS.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7',
    },
    {
      previewImageSrc: 'assets/image/basketball.jpg',
      thumbnailImageSrc: 'assets/image/basketballS.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8',
    },

    {
      previewImageSrc: 'assets/image/moon.jpg',
      thumbnailImageSrc: 'assets/image/moonS.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9',
    },
    {
      previewImageSrc: 'assets/image/sea.jpg',
      thumbnailImageSrc: 'assets/image/seaS.jpg',
      alt: 'Description for Image 10',
      title: 'Title 10',
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1600px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
