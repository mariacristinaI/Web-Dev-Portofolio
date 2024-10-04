import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    title: 'MCI | Home page',
    data: { animation: 'HomePage' }
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent),
    title: 'MCI | About',
    data: { animation: 'AboutPage' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(mod => mod.ProjectsComponent),
    title: 'MCI | Projects',
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent),
    title: 'MCI | Contact',
    data: { animation: 'ContactPage' }
  }
];