//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
  CICRatingModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { RatingsRoutingModule } from './ratings-routing.module';
//Components
import { RatingComponent } from './components/rating/rating.component';
import { RatingInstallComponent } from './components/rating-install/rating-install.component';
import { RatingExamplesComponent } from './components/rating-examples/rating-examples.component';

@NgModule({
  declarations: [
    RatingComponent,
    RatingInstallComponent,
    RatingExamplesComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    CICButtonModule,
    CICDataTableModule,
    CICInputModule,
    DividerModule,
    RatingsRoutingModule,
    CICRatingModule,
  ],
})
export class RatingsModule {}
