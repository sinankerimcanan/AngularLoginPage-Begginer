import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from '../../types/items';
import { HttpClient } from '@angular/common/http';
import { UrunService } from '../../service/urun.service';
import { AlertService } from '../alert/alert.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrl: './urun.component.css',
})
export class UrunComponent {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private itemService: UrunService,
    private alertService: AlertService,
    private router: Router
  ) {}
  responseData: Items[] = [];

  ngOnInit(): void {
    this.fetchDataFromBackend();
  }

  fetchDataFromBackend() {
    this.itemService.getItems().subscribe(
      (response) => {
        this.responseData = response;
        console.log('Ürün Verileri Çekildi');
        console.log(response)
      },
      (error) => {
        console.log('Ürün Verileri çekilmedi');
      }
    );
  }
}
