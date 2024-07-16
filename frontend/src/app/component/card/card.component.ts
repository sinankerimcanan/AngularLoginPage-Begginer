import { Component, Input } from '@angular/core';
import { Items } from '../../types/items';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() responseId!: number;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() flag: boolean = true;
  array: any[] = [];

  sepeteEkle(urunId: number) {
    const sepetStr = localStorage.getItem('sepet');
    let sepet: number[] = sepetStr ? JSON.parse(sepetStr) : [];
    sepet.push(urunId);
    localStorage.setItem('sepet', JSON.stringify(sepet));
    console.log(`Ürün ID: ${urunId} sepete eklendi.`);
  }
}
