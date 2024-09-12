import { Routes } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeDetailsComponent } from './components/home-list/home-details/home-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, title: 'Welcome page' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home-list', component: HomeListComponent, title: 'Home page' },
      {
        path: 'details/:id',
        component: HomeDetailsComponent,
        title: 'Home details',
      },
      { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
    ],
  },
];
