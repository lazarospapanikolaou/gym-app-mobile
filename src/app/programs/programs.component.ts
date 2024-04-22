import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonLabel,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonGrid,
    IonCol,
    IonRow,
  ],
})
export class ProgramsComponent {
  myPrograms: any = [];

  constructor(private router: Router) {
    this.myPrograms.push(
      { id: 1, gym: 'Legs', exercises: 12, estimatedTime: 90 },
      { id: 2, gym: 'Arms', exercises: 12, estimatedTime: 100 },
      { id: 3, gym: 'Chest', exercises: 12, estimatedTime: 120 },
      { id: 4, gym: 'Full Body', exercises: 12, estimatedTime: 90 },
      { id: 5, gym: 'Abs', exercises: 12, estimatedTime: 80 }
    );
  }

  goToExercise(id: number) {
    console.log(id);
    this.router.navigate(['/tabs/programs/program'], {
      queryParams: { id: id },
    });
  }
}
