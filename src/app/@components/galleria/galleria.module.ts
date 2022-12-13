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
import { CICGalleriaModule } from 'src/app/@cic-components/galleria/galleria.module';
import { DividerModule } from 'primeng/divider';
import { GalleriasRoutingModule } from './galleria-routing.module';
//Components
import { GalleriaComponent } from './components/galleria/galleria.component';
import { GalleriaExampleComponent } from './components/galleria-example/galleria-example.component';

@NgModule({
  declarations: [GalleriaComponent, GalleriaExampleComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    GalleriasRoutingModule,
    CICGalleriaModule,
  ],
})
export class GalleriasModule {}
