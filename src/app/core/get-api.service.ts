import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {InputData} from '../datagird/datagrid/datagrid.component';

@Injectable({
  providedIn: 'root',
})
export class GetAPIService {
  public _url: string = 'http://localhost:3000/products';
  public cart_url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<InputData[]> {
    return this.http.get<InputData[]>(this._url);
  }

  getSingleProduct(item_url: string): Observable<InputData> {
    return this.http.get<InputData>(item_url);
  }

  postProduct(body: any): Observable<InputData> {
    return this.http.post<InputData>(this._url, body);
  }

  postCart(body: any): Observable<InputData> {
    return this.http.post<InputData>(this.cart_url, body);
  }

  getCartArr(): Observable<InputData[]> {
    return this.http.get<InputData[]>(this.cart_url);
  }
}
