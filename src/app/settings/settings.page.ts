import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonListHeader, IonList, IonIcon, IonButton, IonRow, IonGrid, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class SettingsPage {
  constructor(private userService: UserService, private router: Router) {
    addIcons({ logOutOutline });
  }



  async logout(): Promise<void> {
    await this.userService.purgeAuth();
    this.router.navigate(['/login'])
  }
}
