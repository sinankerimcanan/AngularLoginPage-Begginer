import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isUserLoggedIn() === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isUserLoggedIn() {
    const value: string | null = localStorage!.getItem('isLogin');
    console.log(value);
    return value;
  }
}
