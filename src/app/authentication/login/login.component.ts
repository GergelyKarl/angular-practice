import { Component, OnInit } from '@angular/core';
import { authService } from '../../core/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: authService, private route: Router) {}

  public isLoggedIn = this.authService.isloggedIn();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitForm(formObj: any) {
    this.authService.postLogin(formObj).subscribe(
      (response) => {
        window.localStorage.setItem('token', response.accessToken);
        this.route.navigate(['success']);
      },
      (error) => {
        alert(error.error);
      }
    );
  }

  ngOnInit(): void {}
}
