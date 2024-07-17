import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from '../../types/items';
import { HttpClient } from '@angular/common/http';
import { UrunService } from '../../service/urun.service';
import { AlertService } from '../alert/alert.service';
import { response } from 'express';
import { error } from 'console';
import { SepetService } from '../../service/sepet.service';
import { Subscription } from 'rxjs';
import { RefreshService } from '../../service/refresh.service';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrl: './sepet.component.css',
})
export class SepetComponent {
  private refreshSubscription!: Subscription;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private itemService: SepetService,
    private alertService: AlertService,
    private router: Router,
    private refreshService: RefreshService
  ) {}
  responseData: Items[] = [];

  clearSepet() {
    console.log('Butona tıklandı');
    localStorage.removeItem('sepet');
    this.reloadComponent()
  }
  ngOnInit() {
    this.fetchDataFromBackend();
    this.refreshSubscription = this.refreshService.refresh$.subscribe(() => {
      this.loadData();
    });
  }
  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  reloadComponent() {
    this.refreshService.triggerRefresh();
  }

  loadData() {
    console.log("aaa")
    this.responseData = []
    console.log(this.responseData)
  }

  fetchDataFromBackend() {
    const array = localStorage.getItem('sepet');
    let sepet: number[] = array ? JSON.parse(array) : [];
    if (sepet.length > 0) {
      console.log('Array içi dolu');
      this.itemService.getItems(sepet).subscribe(
        (response) => {
          this.responseData = response;
          console.log('Ürün Verileri Çekildi');
          console.log(response);
        },
        (error) => {
          console.log('Ürün Verileri çekilmedi');
        }
      );
    }
  }
}
