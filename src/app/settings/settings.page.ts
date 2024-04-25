/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonList, IonListHeader, IonLabel, IonItem, IonSpinner } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [CommonModule, IonSpinner, IonItem, IonLabel, IonListHeader, IonList, IonIcon, IonButton, IonRow, IonGrid, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class SettingsPage {
  loading: boolean = true;

  constructor(private userService: UserService, private router: Router) {
    addIcons({ logOutOutline });
  }

  ngOnInit(){
    this.getReload();
  }

  ionViewWillEnter() {
    this.getReload();
  }

  getReload(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500)
  }

  async logout(): Promise<void> {
    await this.userService.purgeAuth();
    this.router.navigate(['/login'])
  }
}
