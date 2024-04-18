import { Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs/programs/program',
    component: ExercisesComponent,
  },
  {
    path: 'tabs/programs/exercise',
    component: ExerciseComponent,
  },
];
