import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userUrl, loginUrl } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>(userUrl);
  }

  registerUser(body: any) {
    return this.http.post<any>(userUrl, body);
  }

  postLogin(body: any): Observable<any> {
    return this.http.post<any>(loginUrl, body);
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
  }
}
