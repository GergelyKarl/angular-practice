import { Component, Input, OnInit } from '@angular/core';
import { getApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() net: number;
  cartArray: Array<any> = [];

  constructor(private postCart: getApiService) {}

  ngOnInit(): void {}

  addToCart() {
    this.postCart
      .postCart({ pid: this.id, name: this.name, net: this.net })
      .subscribe();
  }
}
