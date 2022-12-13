import { Component, Input, ViewChild} from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { data, GallerieMode } from '../../models/galleria.model';

declare global {
  //https://stackoverflow.com/questions/25993861/how-do-i-get-typescript-to-stop-complaining-about-functions-it-doesnt-know-abou
  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
  }}
@Component({
  selector: 'cic-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class CICGalleriaComponent  {
 //#region Declerations
@Input() data:Array<data>=[]
//An array of options for responsive design
@Input() responsiveOptions:any
 //set style Inline
@Input() style:any
 //Position of indicators. Valid values are "bottom", "top", "left" and "right"
@Input() indicatorsPosition!:string
//Position of thumbnails. Valid values are "bottom", "top", "left" and "right".
@Input() thumbnailsPosition!:string
//Time in milliseconds to scroll items.
@Input() transitionInterval!:number
//set Number of items per page.
@Input() numVisible!:number
@Input() baseZIndex:any
//Whether to display the component on fullscreen.
@Input() fullScreen:boolean=false
 //	Whether to display indicator container.
@Input() showIndicators:boolean=false
 //	Whether to display thumbnail containe
@Input() showThumbnails:boolean=true
//change Item On Hover
@Input() changeItemOnIndicatorHover:boolean=false
 // displayed on preview container.
@Input() showIndicatorsOnItem:boolean=false
//infinite scroll
@Input() circular:boolean=false
//show icon Navigators
@Input() showItemNavigators:boolean=false
//autoPlay
@Input() autoPlay:boolean=false
//Data form
@Input() mode!:GallerieMode
//#endregion declreation
_displayBasic!: boolean ;
_displayCustom!: boolean;
 activeIndex: number = 0;
_ProgrammaticActiveIndex: number = 2;
fullscreen: boolean = false;

onFullScreenListener: any;

@ViewChild('galleria') galleria!: Galleria;
//#region Function
  imageClick(index: number) {
    this.activeIndex = index;
    this._displayCustom = !this._displayCustom;
}
get ProgrammaticIndex(): number {
  return this._ProgrammaticActiveIndex;
}

set ProgrammaticIndex(newValue) {
  if (this.data && 0 <= newValue && newValue <= (this.data.length - 1)) {
      this._ProgrammaticActiveIndex = newValue;
  }
}
next() {
  this.ProgrammaticIndex++;
}

prev() {
  this.ProgrammaticIndex--;
}
//#endregion Function
//#region Function
onThumbnailButtonClick() {
  this.showThumbnails = !this.showThumbnails;
}

toggleFullScreen() {
  if (this.fullscreen) {
      this.closePreviewFullScreen();
  }
  else {
      this.openPreviewFullScreen();
  }
}

openPreviewFullScreen() {
  let elem = this.galleria.element.nativeElement.querySelector(".p-galleria");
  if (elem.requestFullscreen) {
      elem.requestFullscreen();
  }
  else if (elem['mozRequestFullScreen']) { /* Firefox */
      elem['mozRequestFullScreen']();
  }
  else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
      elem['webkitRequestFullscreen']();
  }
  else if (elem['msRequestFullscreen']) { /* IE/Edge */
      elem['msRequestFullscreen']();
  }
}

onFullScreenChange() {
  this.fullscreen = !this.fullscreen;
}

closePreviewFullScreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
  else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
  }
  else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
  }
  else if (document['msExitFullscreen']) {
      document['msExitFullscreen']();
  }
}

bindDocumentListeners() {
  this.onFullScreenListener = this.onFullScreenChange.bind(this);
  document.addEventListener("fullscreenchange", this.onFullScreenListener);
  document.addEventListener("mozfullscreenchange", this.onFullScreenListener);
  document.addEventListener("webkitfullscreenchange", this.onFullScreenListener);
  document.addEventListener("msfullscreenchange", this.onFullScreenListener);
}

unbindDocumentListeners() {
  document.removeEventListener("fullscreenchange", this.onFullScreenListener);
  document.removeEventListener("mozfullscreenchange", this.onFullScreenListener);
  document.removeEventListener("webkitfullscreenchange", this.onFullScreenListener);
  document.removeEventListener("msfullscreenchange", this.onFullScreenListener);
  this.onFullScreenListener = null;
}

ngOnDestroy() {
  this.unbindDocumentListeners();
}

galleriaClass() {
  return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
}

fullScreenIcon() {
  return `${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
}

//#endregion Function
}
