import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownsComponent } from './components/dropdown/dropdowns.component';

const routes: Routes = [{ path: '', component: DropdownsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropdownsRoutingModule {}
