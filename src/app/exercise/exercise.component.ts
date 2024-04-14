import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  standalone: true,
})
export class ExerciseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
