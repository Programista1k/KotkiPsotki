import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User = {
    isAuthenticated: false
  }

  constructor() { }

  isAuthenticated(): boolean {
    return this.currentUser.isAuthenticated;
  }

  setAuthentication(authenticated: boolean): void {
    this.currentUser.isAuthenticated = authenticated;
  }
}
