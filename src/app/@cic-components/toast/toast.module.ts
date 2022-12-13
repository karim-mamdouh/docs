//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
//Components
import { CICToastComponent } from './components/toast/toast.component';
//Services

@NgModule({
  declarations: [CICToastComponent],
  imports: [CommonModule, ToastModule],
  exports: [CICToastComponent],
})
export class CICToastModule {}
