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
  selector: 'app-upload-urun',
  templateUrl: './upload-urun.component.html',
  styleUrl: './upload-urun.component.css',
})
export class UploadUrunComponent {
  itemsForm: FormGroup;
  newItem!: Items;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private itemService: UrunService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.itemsForm = this.fb.group({
      title: ['', Validators.required],
      imageurl: ['', Validators.required],
      stockstatus: ['true', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.itemsForm.valid) {
      const items: Items = this.itemsForm.value;

      this.itemService.addItem(items).subscribe(
        (response) => {
            console.log(response)
            this.alertService.showAlert('Ürün Eklendi', 'success');
        },
        (error) => {
          console.log(error)
          this.alertService.showAlert('Urun Kayıt Edilmedi', 'danger');
        }
      );
    } else {
      this.alertService.showAlert(
        'Beklenmedik bir Hata meydana geldi',
        'warning'
      );
    }
  }
}
