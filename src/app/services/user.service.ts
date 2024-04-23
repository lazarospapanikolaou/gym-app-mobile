import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
    Observable,
    of,
  } from 'rxjs';
  @Injectable({
    providedIn: 'root',
  })

  export class UserService { 
    attemptAuth(credentials: { email: string, password: string }): Observable<User | null> {
      const hardcodedEmail = 'test@test.com';
      const hardcodedPassword = '1234';
  
      if (credentials.email === hardcodedEmail && credentials.password === hardcodedPassword) {
        const user: User = {
            id: 1,
            email: 'test@test.com',
            accessToken: '',
        };
        console.log(user);
        return of(user); 
      } else {
        return of(null); 
      }
    }
  }