import { Routes } from '@angular/router';
import { LayoutComponent } from '@layouts/layout/layout.component';

export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((m) => m.VIEWS_ROUTES),
  },

];
