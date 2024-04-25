import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonList,
  IonItem,
  IonLabel,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    IonBackButton,
    IonButtons,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonCardContent,
    ExerciseComponent,
  ],
})
export class ExercisesComponent {
  exercises: any = [];
  id!: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.exercises.push(
      { id: 1, title: 'Biseps', estimatedTime: 20 },
      { id: 2, title: 'Legs', estimatedTime: 30 },
      { id: 3, title: 'Chest', estimatedTime: 40 }
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  goToExercise(id: number) {
    this.router.navigate(['/tabs/programs/exercise'], {
      queryParams: { id: id },
    });
  }
}
