/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Validators,FormBuilder, FormGroup, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonIcon, IonButton, IonCol, IonRow, IonGrid, IonNote, IonInput, IonItem, IonList, IonHeader, IonCardSubtitle, IonToolbar, IonCardContent, IonCardHeader, IonContent, IonCard, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ,FormsModule ,IonCardTitle, IonCard, IonContent, IonCardHeader, IonCardContent, IonToolbar, IonCardSubtitle, IonHeader, IonIcon, IonButton, IonCol, IonRow, IonGrid, IonNote, IonInput, IonItem, IonList, ]
})
export class LoginPage implements OnInit {

  showPassword = false;


  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  getType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }

  login() {
    console.log('I AM IN LOGIN')
    
  }

}
