import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./loom/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'stock_transactions',
        loadChildren: () => import('./loom/stock_transactions/routes').then((m) => m.routes)
      },
      {
        path: 'order_transactions',
        loadChildren: () => import('./loom/order_transactions/routes').then((m) => m.routes)
      },
      {
        path: 'reports',
        loadChildren: () => import('./loom/reports/routes').then((m) => m.routes)
      },
      {
        path: 'definitions',
        loadChildren: () => import('./loom/definitions/routes').then((m) => m.routes)
      },
      {
        path: 'management',
        loadChildren: () => import('./loom/management/routes').then((m) => m.routes)
      },
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./loom/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./loom/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./loom/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
