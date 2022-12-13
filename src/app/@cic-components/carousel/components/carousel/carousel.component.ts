import { Products } from './../../product';

import { Component, Input } from '@angular/core';




@Component({
  selector: 'cic-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CICCarouselComponent {
 //#region declerations
@Input() circular :boolean=false //Defines if scrolling would be infinite.
@Input() numScroll!:number //Set number of items to scroll
@Input() controlName!:string //Set  formControlName for data
@Input() numVisible!:number //Set number of items per page.
@Input() data :Array<Products>=[] //Data Form
@Input() autoplayInterval!:number //Set Time in milliseconds to scroll items automatically.
@Input() style :any //Set Inline style of the component.
@Input() label !:string //Set Carousel Name
@Input()responsiveOptions:any //Set 	An array of options for responsive design.
@Input()orientation:string='horizontal' //Set 	An array of options for responsive design.
@Input()verticalViewPortHeight!:string //Set Height of the viewport in vertical layout.
 //#endregion declerations

	constructor() {
	}
}
