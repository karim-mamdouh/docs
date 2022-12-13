import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

const routes: Routes = [{ path: '', component: RadioButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioButtonsRoutingModule {}
