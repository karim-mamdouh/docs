//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MessageService, SharedModule } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@core/core.module';
import { BlockModule } from './@block/block.module';
//Components
import { AppComponent } from './@block';

@NgModule({
  declarations: [],
  imports: [
    BlockModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
