import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'sign-details',
    loadComponent: () => import('./sign-details/sign-details.page').then( m => m.SignDetailsPage)
  },

];
