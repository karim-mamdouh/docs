import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

import { CICGalleriaComponent } from './components/galleria/galleria.component';
import { CICButtonModule } from '@cic-garage/cic-core-library';

@NgModule({
  declarations: [CICGalleriaComponent],
  imports: [CommonModule, GalleriaModule, CICButtonModule],
  exports: [CICGalleriaComponent],
})
export class CICGalleriaModule {}
