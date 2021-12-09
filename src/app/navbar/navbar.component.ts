import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GetAPIService} from '../core/get-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartArr: any = [];

  constructor(private getCartArr: GetAPIService) {
  }


  ngOnInit(): void {
    this.getCartArr.getCartArr().subscribe(data => this.cartArr = data);
  }


}
