import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSendoService {
  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<any> {
    let data = { "limit": 1000, "device": "web", "is_widget": true, "special_status": 0 }
    return this.http.post<any>('https://cors-anywhere.herokuapp.com/https://api.sendo.vn/flash-deal/buyer/ajax-product/', data)
  }
}
