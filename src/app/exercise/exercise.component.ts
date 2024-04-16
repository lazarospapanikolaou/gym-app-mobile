import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { SliderConfirmComponent } from '../components/slider-confirm/slider-confirm.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SliderConfirmComponent,
  ],
  standalone: true,
})
export class ExerciseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
