import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '' ,
    loadComponent: () => import('./components/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  } ,
  {
    path: 'admin-panel' ,
    loadComponent: () => import('./components/admin-panel/admin-panel.component').then(m => m.AdminPanelComponent)
  } ,
  {
    path: 'inquries/slenquiry' ,
    loadComponent: () => import('./components/user-panel/user-panel.component').then(m => m.UserPanelComponent)
  }

];
