import { Routes } from '@angular/router';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'comming-soon',
    component: CommingSoonComponent,
  },
];
