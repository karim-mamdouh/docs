import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividerComponent } from './components/divider/divider.component';

const routes: Routes = [{ path: '', component: DividerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DividersRoutingModule {}
