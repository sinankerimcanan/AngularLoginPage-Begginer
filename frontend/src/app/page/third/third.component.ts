import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent {
  constructor(private router: Router) {}
  navigateToLogin() {
    this.router.navigate(['/login']).then(
      (nav) => {
        console.log(nav); // true if navigation is successful
      },
      (err) => {
        console.log(err); // when there's an error
      }
    );
    console.log('tıklandı');
  }
}
