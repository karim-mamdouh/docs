import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriaComponent } from './components/galleria/galleria.component';

const routes: Routes = [{ path: '', component: GalleriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleriasRoutingModule {}
