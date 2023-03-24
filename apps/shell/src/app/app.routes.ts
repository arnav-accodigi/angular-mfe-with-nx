import { loadRemoteModule } from '@nrwl/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'library',
    loadChildren: () =>
      loadRemoteModule('library', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      loadRemoteModule('library', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
