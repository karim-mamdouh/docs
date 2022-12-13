import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CICCarouselComponent } from './components/carousel/carousel.component';
import { CICButtonModule } from '@cic-garage/cic-core-library';

@NgModule({
  declarations: [CICCarouselComponent],
  imports: [CommonModule, CarouselModule, CICButtonModule],
  exports: [CICCarouselComponent],
})
export class CICCarouselModule {}
