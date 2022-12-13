//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockRoutingModule } from './block-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CICToastModule } from '../@cic-components/toast/toast.module';
import { AccordionModule } from 'primeng/accordion';
//Components
import { AppComponent } from './@root/app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
//Services
import { ToasterService } from '../services/toaster/toaster.service';

@NgModule({
  declarations: [AppComponent, SideBarComponent],
  imports: [
    CommonModule,
    BlockRoutingModule,
    ReactiveFormsModule,
    CICToastModule,
    AccordionModule,
  ],
  providers: [ToasterService],
})
export class BlockModule {}
