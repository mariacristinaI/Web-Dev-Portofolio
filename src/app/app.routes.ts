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
    title: 'Portfolio | Maria-Cristina Iosub',
    data: { animation: 'HomePage' }
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent),
    title: 'About | Maria-Cristina Iosub',
    data: { animation: 'AboutPage' }
  },
  {
    path: 'posts',
    loadComponent: () => import('./blog/blog.component').then(mod => mod.BlogComponent),
    title: 'Digital Garden | Maria-Cristina Iosub',
    data: { animation: 'BlogPage' },
  },
  { 
    path: 'posts/:id',
    loadComponent: () =>
      import('./blog/post/post.component').then((c) => c.PostComponent), 
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(mod => mod.ProjectsComponent),
    title: 'Projects | Maria-Cristina Iosub',
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'pomodoro-timer',
    loadComponent: () => import('./pomodoro-timer/pomodoro-timer.component').then(mod => mod.PomodoroTimerComponent),
    title: 'Pomodoro | Maria-Cristina Iosub',
    data: { animation: 'PomodoroPage' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent),
    title: 'Contact | Maria-Cristina Iosub',
    data: { animation: 'ContactPage' }
  },
];