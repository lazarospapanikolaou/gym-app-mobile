/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
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
  IonButton,
  IonIcon,
  IonText,
  IonCardHeader,
  IonCardSubtitle,
  IonSpinner,
  IonImg,
  IonAvatar,
  IonBadge,
} from '@ionic/angular/standalone';
import { UserService } from '../services/user.service';
import {
  chatbubbleOutline,
  chevronForwardOutline,
  ellipsisVerticalOutline,
  heartOutline,
  lockOpenOutline,
  logOutOutline,
  timeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonImg,
    IonSpinner,
    IonCardSubtitle,
    IonCardHeader,
    IonText,
    IonIcon,
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
    IonBadge,
  ],
})
export class ProgramsComponent {
  myPrograms: any = [];
  loading: boolean = true;

  constructor(private router: Router, private userService: UserService) {
    addIcons({
      logOutOutline,
      chevronForwardOutline,
      ellipsisVerticalOutline,
      lockOpenOutline,
      timeOutline,
      heartOutline,
      chatbubbleOutline,
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getReload();
  }

  getReload() {
    this.loading = true;
    this.myPrograms = [];
    setTimeout(() => {
      this.myPrograms.push(
        {
          id: 1,
          gym: 'Quads/Abductors/Adductor',
          exercises: 12,
          estimatedTime: 90,
        },
        { id: 2, gym: 'Back/Rear Delt', exercises: 12, estimatedTime: 100 },
        { id: 3, gym: 'Chest', exercises: 12, estimatedTime: 120 },
        { id: 4, gym: 'Calves/Abs/Neck', exercises: 12, estimatedTime: 90 },
        { id: 5, gym: 'Hamstrings/Glutes', exercises: 12, estimatedTime: 80 }
      );

      this.loading = false;
    }, 500);
  }

  goToExercise(id: number) {
    this.router.navigate(['/tabs/programs/program'], {
      queryParams: { id: id },
    });
  }

  async logout(): Promise<void> {
    await this.userService.purgeAuth();
    this.router.navigate(['/login']);
  }
}
