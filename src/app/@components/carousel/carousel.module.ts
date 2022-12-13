//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { CICCarouselModule } from 'src/app/@cic-components/carousel/carousel.module';
import { CarouselRoutingModule } from './carousel-routing.module';
//Components
import { CarouselExamplesComponent } from './components/carousel-examples/carousel-examples.component';
import { CarouselInstallComponent } from './components/carousel-install/carousel-install.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselExamplesComponent,
    CarouselInstallComponent,
    CarouselComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    CarouselRoutingModule,
    CICCarouselModule,
  ],
})
export class CarouselModule {}
