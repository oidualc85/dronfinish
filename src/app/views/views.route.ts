import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home-1/home-1.component';

export const VIEWS_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'home' } },

  {
    path: '',
    loadChildren: () =>
      import('./services/services.route').then((m) => m.SERVICES_ROUTES),
  },
      {
        path: 'home-1',
        component: Home1Component,
        data: { title: "home-1" }
       
    },
  {
    path: '',
    loadChildren: () =>
      import('./blogs/blogs.route').then((m) => m.BLOGS_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./case-studies/case-studies.route').then(
        (m) => m.CASE_STUDIES_ROUTES
      ),
  },
  {
    path: '',
    loadChildren: () =>
            import('./case-studies/case-studies.route').then((mod) => mod.CASE_STUDIES_ROUTES),
    },
    {
        path: '',
        loadChildren: () =>
            import('./other-pages/other-pages.route').then((mod) => mod.OTHER_PAGES_ROUTES),
    },
];
