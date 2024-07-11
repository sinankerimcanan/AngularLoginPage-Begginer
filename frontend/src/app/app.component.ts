import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //   newData: any;
  //   addData() {
  //     throw new Error('Method not implemented.');
  //   }
  //   updateData(arg0: any, arg1: { name: any; value: any; }) {
  //     throw new Error('Method not implemented.');
  //   }
  //   deleteData(arg0: any) {
  //     throw new Error('Method not implemented.');
  //   }
  //   items: any[] = [];
  //   newItem: any = { name: '', value: '' };
  // constructor(private dataService: DataService, private router: Router) { }
  //   ngOnInit(): void {
  //     this.loadItems();
  //   }
  //   loadItems(): void {
  //     this.dataService.getItems().subscribe(response => {
  //       this.items = response;
  //     });
  //   }
  //   addItem(): void {
  //     this.dataService.addItem(this.newItem).subscribe(response => {
  //       this.items.push(response);
  //       this.newItem = { name: '', value: '' }; // Formu temizle
  //     });
  //   }
  //   deleteItem(id: number): void {
  //     this.dataService.deleteItem(id).subscribe(() => {
  //       this.items = this.items.filter(item => item.id !== id);
  //     });
  //   }
  //   updateItem(id: number, updatedItem: any): void {
  //     this.dataService.updateItem(id, updatedItem).subscribe(response => {
  //       const index = this.items.findIndex(item => item.id === id);
  //       if (index !== -1) {
  //         this.items[index] = response;
  //       }
  //     });
  //   }
}
