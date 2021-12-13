import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/interfaces/InputData';
import { getApiService } from '../../core/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productArray: InputData[];

  constructor(private getProductsArr: getApiService) {}

  getArray() {
    this.getProductsArr.getProducts().subscribe((item: InputData[]) => {
      this.productArray = item;
    });
  }

  ngOnInit(): void {
    this.getArray();
  }
}
