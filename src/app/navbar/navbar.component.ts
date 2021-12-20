import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getApiService } from '../core/services/api.service';
import { InputData } from '../interfaces/InputData';
import { authService } from '../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartArr: InputData[] = [];

  constructor(
    private getCartArr: getApiService,
    private authService: authService
  ) {}

  ngOnInit(): void {
    this.getCartArr.getCartArr().subscribe((data) => (this.cartArr = data));
  }

  doLogout() {
    this.authService.logoutUser();
  }

  isLoggedIn() {
    return this.authService.isloggedIn();
  }
}
