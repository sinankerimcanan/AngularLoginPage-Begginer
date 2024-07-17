import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../types/items';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  updateItem(id : any , updateItem : Items): Observable<any> {
    const params = id
   const body = updateItem
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, updateItem);
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
