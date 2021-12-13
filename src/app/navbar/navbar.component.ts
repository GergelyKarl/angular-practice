import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getApiService } from '../core/api.service';
import { InputData } from '../interfaces/InputData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartArr: InputData[] = [];

  constructor(private getCartArr: getApiService) {}

  ngOnInit(): void {
    this.getCartArr.getCartArr().subscribe((data) => (this.cartArr = data));
  }
}
