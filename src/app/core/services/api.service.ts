import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl, cartUrl } from '../../../environments/environment';
import { InputData } from '../../interfaces/InputData';

@Injectable({
  providedIn: 'root',
})
export class getApiService {
  constructor(public http: HttpClient) {}

  getProducts(): Observable<InputData[]> {
    return this.http.get<InputData[]>(productUrl);
  }

  getSingleProduct(itemUrl: string): Observable<InputData> {
    return this.http.get<InputData>(itemUrl);
  }

  postProduct(body: any): Observable<InputData> {
    return this.http.post<InputData>(productUrl, body);
  }

  postCart(body: any): Observable<InputData> {
    return this.http.post<InputData>(cartUrl, body);
  }

  getCartArr(): Observable<InputData[]> {
    return this.http.get<InputData[]>(cartUrl);
  }
}
