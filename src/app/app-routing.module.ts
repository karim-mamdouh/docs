import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/components', pathMatch: 'full' },
  {
    path: 'components',
    loadChildren: () =>
      import('./@components/components.module').then(
        (module) => module.CICComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
