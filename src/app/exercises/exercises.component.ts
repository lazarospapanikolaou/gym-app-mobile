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
  IonCardContent, IonSpinner, IonAccordionGroup, IonAccordion, IonCardHeader, IonCardTitle, IonIcon, IonText } from '@ionic/angular/standalone';
import { ExerciseComponent } from '../exercise/exercise.component';
import { SliderConfirmComponent } from '../components/slider-confirm/slider-confirm.component';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, gitCommitOutline, gitCompareOutline, playCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonCardTitle, IonCardHeader, IonAccordion, IonAccordionGroup, IonSpinner, 
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
    addIcons({
      checkmarkCircleOutline,
      playCircleOutline,
      gitCompareOutline
    });
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
        { id: 1, title: 'Seated Leg Curl', restTime: 20, description: 'Train your arms today' },
        { id: 2, title: 'Lying Leg Curl', restTime: 30, description: 'Train your legs today ' },
        { id: 3, title: 'Leg Press', restTime: 40, description: 'Train your chest today' }
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
