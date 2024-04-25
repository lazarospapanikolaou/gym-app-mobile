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
  IonButton, IonIcon } from '@ionic/angular/standalone';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  standalone: true,
  imports: [IonIcon, 
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
    IonButton,
  ],
})
export class ProgramsComponent {
  myPrograms: any = [];

  constructor(private router: Router, private userService: UserService) {
    this.myPrograms.push(
      { id: 1, gym: 'Legs', exercises: 12, estimatedTime: 90 },
      { id: 2, gym: 'Arms', exercises: 12, estimatedTime: 100 },
      { id: 3, gym: 'Chest', exercises: 12, estimatedTime: 120 },
      { id: 4, gym: 'Full Body', exercises: 12, estimatedTime: 90 },
      { id: 5, gym: 'Abs', exercises: 12, estimatedTime: 80 }
    );
  }

  goToExercise(id: number) {
    this.router.navigate(['/tabs/programs/program'], {
      queryParams: { id: id },
    });
  }

  async logout(): Promise<void> {
    await this.userService.purgeAuth();
    this.router.navigate(['/login'])
  }
}
