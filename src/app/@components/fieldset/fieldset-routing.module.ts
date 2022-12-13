import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldsetComponent } from './components/fieldset/fieldset.component';

const routes: Routes = [{ path: '', component: FieldsetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsetsRoutingModule {}
