//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
  CICImageModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { ImagesRoutingModule } from './images-routing.module';
//Components
import { ImageComponent } from './components/image/image.component';
import { ImageExamplesComponent } from './components/image-examples/image-examples.component';
import { ImageInstallComponent } from './components/image-install/image-install.component';

@NgModule({
  declarations: [ImageComponent, ImageExamplesComponent, ImageInstallComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    ImagesRoutingModule,
    CICImageModule,
  ],
})
export class ImagesModule {}
