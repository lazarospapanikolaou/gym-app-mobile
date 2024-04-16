import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, CommonModule],
})
export class ProgramComponent {
  myPrograms: any = [];

  constructor() {
    this.myPrograms.push(
      { gym: 'SuperFit', exercises: 12, estimatedTime: 90 },
      { gym: 'SuperMan', exercises: 12, estimatedTime: 100 },
      { gym: 'Excell', exercises: 12, estimatedTime: 120 },
      { gym: 'New Body', exercises: 12, estimatedTime: 90 },
      { gym: 'Fit Ness', exercises: 12, estimatedTime: 80 }
    );
  }
}
