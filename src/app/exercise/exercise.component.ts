import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
} from '@ionic/angular/standalone';
import { SliderConfirmComponent } from '../components/slider-confirm/slider-confirm.component';
import { ActivatedRoute } from '@angular/router';

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
    IonBackButton,
  ],
  standalone: true,
})
export class ExerciseComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
      console.log(this.id);
    });
  }
}
