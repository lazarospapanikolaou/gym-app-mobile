import { Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs/tab1/programs',
    component: ExercisesComponent,
  },
  {
    path: 'tabs/tab1/exercises',
    component: ExerciseComponent,
  },
];
