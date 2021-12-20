import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successlogin',
  templateUrl: './successlogin.component.html',
  styleUrls: ['./successlogin.component.scss'],
})
export class SuccessloginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 1000);
  }
}
