import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/interfaces/InputData';
import { getApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartArray: InputData[] = [];
  displayedColumns = ['id', 'name', 'net'];
  dataSource: InputData[];
  sumArr: number[];

  constructor(private getCartArr: getApiService) {}

  ngOnInit(): void {
    this.getCartArr.getCartArr().subscribe((data) => {
      this.cartArray = data;
      this.dataSource = this.cartArray;
    });
  }

  calcSum() {
    return this.cartArray
      .map((t) => t.net)
      .reduce((acc, value) => acc + value, 0);
  }
}
