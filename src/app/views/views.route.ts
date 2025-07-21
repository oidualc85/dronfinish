import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const VIEWS_ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Inicio' } },

  {
    path: '',
    loadChildren: () =>
      import('./services/services.route').then((m) => m.SERVICES_ROUTES),
  }
];

