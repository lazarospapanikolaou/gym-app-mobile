import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SettingsService {
  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(val: string) {
    this.theme.next(val);
  }

  get activeTheme() {
    return this.theme.asObservable();
  }
}
