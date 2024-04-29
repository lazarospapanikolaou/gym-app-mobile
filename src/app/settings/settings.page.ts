import { Component } from '@angular/core';
import {
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonSpinner,
  IonText,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [
    IonText,
    CommonModule,
    IonSpinner,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonIcon,
    IonButton,
    IonRow,
    IonGrid,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonToggle,
  ],
})
export class SettingsPage {
  loading: boolean = true;
  selectedTheme!: String;
  isDarkTheme!: boolean;

  constructor(
    private settingsService: SettingsService,
    private userService: UserService,
    private router: Router
  ) {
    addIcons({ logOutOutline });
    this.settingsService.activeTheme.subscribe(
      (val) => (this.selectedTheme = val)
    );
  }

  ngOnInit() {
    this.getReload();
  }

  ionViewWillEnter() {
    this.getReload();
  }

  getReload() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  activatePopup() {
    console.log('Activate Popup');
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settingsService.setActiveTheme('light-theme');
    } else {
      this.settingsService.setActiveTheme('dark-theme');
    }
  }

  async logout(): Promise<void> {
    await this.userService.purgeAuth();
    this.router.navigate(['/login']);
  }
}
