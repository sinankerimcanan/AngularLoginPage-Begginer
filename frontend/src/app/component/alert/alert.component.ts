import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent implements OnInit {
  message: any | undefined;

  constructor(
    private alertService: AlertService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit() {
    this.alertService.alertMessage$.subscribe((alert) => {
      this.appendAlert(alert.message, alert.type);
    });
  }

  appendAlert(message: string, type: string) {
    const wrapper = this.renderer?.createElement('div');
    this.renderer?.setProperty(
      wrapper,
      'innerHTML',
      [
        `<div style="width: 33%;   
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;" class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('')
    );

    this.renderer?.appendChild(this.el?.nativeElement, wrapper); 

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, wrapper);
    }, 1500);
  }
}
