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
    path: 'capabilities',
    loadComponent: () => import('./pages/capabilities/capabilities.component').then(m => m.CapabilitiesComponent),
    title: 'I8 - Capabilities'
  },
  {
    path: 'manifesto',
    loadComponent: () => import('./pages/manifesto/manifesto.component').then(m => m.ManifestoComponent),
    title: 'I8 - Manifesto'
  },
  {
    path: 'journal',
    loadComponent: () => import('./pages/journal/journal.component').then(m => m.JournalComponent),
    title: 'I8 - Journal'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'I8 - Contact'
  },
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: '**', redirectTo: '/work' }
];