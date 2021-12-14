import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from "../authentication/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../core/services/tokeninterceptor.service";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})
export class AuthenticationModule {
}
