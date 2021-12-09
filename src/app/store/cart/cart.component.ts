import {Component, OnInit} from '@angular/core';
import {GetAPIService} from '../../core/get-api.service';
import {InputData} from '../../datagird/datagrid/datagrid.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartArray: InputData[] = [];
  displayedColumns: string[] = ['id', 'name', 'net'];
  dataSource: any;
  sumArr: any;

  constructor(private getCartArr: GetAPIService) {
  }


  ngOnInit(): void {
    this.getCartArr.getCartArr().subscribe(data => {
      this.cartArray = data;
      this.dataSource = this.cartArray;

    });
  }

  calcSum() {
    return this.cartArray.map(t => t.net).reduce((acc, value) => acc + value, 0);
  }

}
