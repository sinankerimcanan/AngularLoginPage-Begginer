import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    private alertSubject = new Subject<{ message: string, type: string }>();

  alertMessage$ = this.alertSubject.asObservable();

  showAlert(message: string, type: string) {
    this.alertSubject.next({ message , type });
  }
}
