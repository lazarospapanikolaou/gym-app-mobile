import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ExercisesComponent } from '../exercises/exercises.component';
import { ExerciseComponent } from '../exercise/exercise.component';
import { ProgramsComponent } from '../programs/programs.component';
import { AuthGuard } from '../services/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'programs',
        // component: ProgramsComponent,
        loadComponent: () =>
          import('../programs/programs.component').then(
            (m) => m.ProgramsComponent
          ),
          
      },
      {
        path: 'programs/program',
        loadComponent: () =>
          import('../exercises/exercises.component').then(
            (m) => m.ExercisesComponent
          ),
          
        // component: ExercisesComponent,
      },
      {
        path: 'programs/exercise',
        loadComponent: () =>
          import('../exercise/exercise.component').then(
            (m) => m.ExerciseComponent
          ),
         
        // component: ExerciseComponent,
      },
      // {
      //   path: 'tab2',
      //   loadComponent: () =>
      //     import('../tab2/tab2.page').then((m) => m.Tab2Page),
      // },
      // {
      //   path: 'tab3',
      //   loadComponent: () =>
      //     import('../tab3/tab3.page').then((m) => m.Tab3Page),
      // },
      {
        path: '',
        redirectTo: '/tabs/programs',
        pathMatch: 'full',
        
      },
      
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/programs',
    pathMatch: 'full',
  },
];
