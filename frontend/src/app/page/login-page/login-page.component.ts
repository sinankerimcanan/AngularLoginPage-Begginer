import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { AlertService } from '../../component/alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { delay } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  newItem = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dataService: DataService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    localStorage.removeItem('isLogin');
  }
  setItem(key: string, value: boolean): void {
    localStorage.setItem(key, value.toString());
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const email: string = this.loginForm.get('email')!.value;
      const password: string = this.loginForm.get('password')!.value;

      this.dataService.addItem(email, password).subscribe(
        (response) => {
          this.alertService.showAlert(
            'Giriş Başarılı: Yönlendiriliyorsunuz  ',
            'success'
          );
          this.setItem('isLogin', true);
          setTimeout(() => {
            this.router.navigate(['/second']);
          }, 2000);
        },
        (error) => {
          this.setItem('isLogin', false);
          this.alertService.showAlert(
            'Giriş Başarısız Lütfen Tekrar Deneyiniz ',
            'danger'
          );
        }
      );
    } else {
      this.setItem('isLogin', false);
      this.alertService.showAlert(
        'Form geçersiz! Lütfen Boş Bırakma!',
        'warning'
      );
    }
  }
}
