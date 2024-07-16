import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../types/items';

@Injectable({
  providedIn: 'root'
})
export class SepetService {

  private apiUrl = 'http://localhost:3000/items/sepet';

  constructor(private http: HttpClient) { }

  getItems(value: number[]): Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = { value };
    return this.http.get<any[]>(this.apiUrl + '?value=' + value);
  }
}
