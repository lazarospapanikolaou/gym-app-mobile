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
  IonCardContent, IonSpinner, IonAccordionGroup, IonAccordion, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { ExerciseComponent } from '../exercise/exercise.component';
import { SliderConfirmComponent } from '../components/slider-confirm/slider-confirm.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonAccordion, IonAccordionGroup, IonSpinner, 
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
    SliderConfirmComponent,
  ],
})
export class ExercisesComponent {
  exercises: any = [];
  id!: number;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    });
    // this.getReload();
  }

  ionViewWillEnter() {
    this.getReload();
  }

  getReload(){
    this.loading = true;
    setTimeout(() => {
      this.exercises.push(
        { id: 1, title: 'Biseps', estimatedTime: 20, description: 'Train your arms today' },
        { id: 2, title: 'Legs', estimatedTime: 30, description: 'Train your legs today ' },
        { id: 3, title: 'Chest', estimatedTime: 40, description: 'Train your chest today' }
      );
  
      this.loading = false;
    }, 500)
  }

  goToExercise(id: number) {
    this.router.navigate(['/tabs/programs/exercise'], {
      queryParams: { id: id },
    });
  }
}
