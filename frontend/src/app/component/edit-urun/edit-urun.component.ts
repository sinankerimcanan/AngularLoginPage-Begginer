import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from '../../types/items';
import { HttpClient } from '@angular/common/http';
import { UrunService } from '../../service/urun.service';
import { AlertService } from '../alert/alert.service';
import { response } from 'express';
import { error } from 'console';
import { EditService } from '../../service/edit.service';

@Component({
  selector: 'app-edit-urun',
  templateUrl: './edit-urun.component.html',
  styleUrl: './edit-urun.component.css',
})
export class EditUrunComponent {
  @Input() id!: number;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private itemService: EditService,
    private alertService: AlertService,
    private router: Router
  ) {}
  responseData: Items[] = [];
  updatedData: Items = {
    id: 38,
    title: 'deneme',
    imageurl: 'deneme',
    stockstatus: false,
    description: 'deneme'
  }
  selectedId : any | undefined


  onSelectedChange($event: Event) {
    this.selectedId = (event!.target as HTMLSelectElement).value;
    console.log('Seçilen değer:', this.selectedId);
  }

  onSubmit(){
    this.itemService.updateItem(this.selectedId, this.updatedData!).subscribe(
      (response) => {
        console.log(response);
        this.alertService.showAlert('Ürün Güncellendi', 'success');
      },
      (error) => {
        console.log(error);
        this.alertService.showAlert('Urun Güncelleme Başarısız', 'danger');
      }
    );
  }

  ngOnInit(): void {
    this.fetchDataFromBackend();
  }

  fetchDataFromBackend() {
    this.itemService.getItems().subscribe(
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
