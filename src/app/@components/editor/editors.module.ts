//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import {
  CICButtonModule,
  CICDataTableModule,
  CICInputModule,
} from '@cic-garage/cic-core-library';
import { DividerModule } from 'primeng/divider';
import { EditorsRoutingModule } from './editors-routing.module';
//Components
import { EditorComponent } from './components/editor/editor.component';
import { EditorExamplesComponent } from './components/editor-examples/editor-examples.component';
import { EditorInstallComponent } from './components/editor-install/editor-install.component';

@NgModule({
  declarations: [
    EditorComponent,
    EditorExamplesComponent,
    EditorInstallComponent,
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
    EditorsRoutingModule,
  ],
})
export class EditorsModule {}
