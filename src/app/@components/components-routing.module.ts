import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendars/calendars.module').then(
        (module) => module.CalendarsModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./inputs/inputs.module').then((module) => module.InputsModule),
  },
  {
    path: 'datatable',
    loadChildren: () =>
      import('./datatable/datatable.module').then(
        (module) => module.DatatableModule
      ),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./buttons/buttons.module').then((module) => module.ButtonsModule),
  },
  {
    path: 'dropdown',
    loadChildren: () =>
      import('./dropdowns/dropdowns.module').then(
        (module) => module.DropdownsModule
      ),
  },
  {
    path: 'galleria',
    loadChildren: () =>
      import('./galleria/galleria.module').then(
        (module) => module.GalleriasModule
      ),
  },
  {
    path: 'rating',
    loadChildren: () =>
      import('./rating/ratings.module').then((module) => module.RatingsModule),
  },
  {
    path: 'knob',
    loadChildren: () =>
      import('./knob/knobs.module').then((module) => module.KnobsModule),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editors.module').then((module) => module.EditorsModule),
  },
  {
    path: 'image',
    loadChildren: () =>
      import('./image/images.module').then((module) => module.ImagesModule),
  },
  {
    path: 'carousel',
    loadChildren: () =>
      import('./carousel/carousel.module').then(
        (module) => module.CarouselModule
      ),
  },
  {
    path: 'fieldSet',
    loadChildren: () =>
      import('./fieldset/fieldset.module').then(
        (module) => module.FieldsetsModule
      ),
  },
  {
    path: 'divider',
    loadChildren: () =>
      import('./divider/divider.module').then(
        (module) => module.DividersModule
      ),
  },
  {
    path: 'radioButton',
    loadChildren: () =>
      import('./radio-button/radio-buttons.module').then(
        (module) => module.RadioButtonsModule
      ),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./checkbox/checkbox.module').then(
        (module) => module.CheckboxModule
      ),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then((module) => module.ChartsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CICComponentsRoutingModule {}
