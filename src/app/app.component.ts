/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { UserService } from './services/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from './services/settings';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  selectedTheme!: String;

  constructor(
    private router: Router,
    private userService: UserService,
    private settingsService: SettingsService
  ) {
    this.settingsService.activeTheme.subscribe(
      (val) => (this.selectedTheme = val)
    );
  }

  ngOnInit() {}
}
