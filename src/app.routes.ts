import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: 'I8 - Work'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'I8 - About'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'I8 - Contact'
  },
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: '**', redirectTo: '/work' }
];
