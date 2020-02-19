import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCarsComponent } from './car/list-cars/list-cars.component';
import { LoginComponent } from './login/login.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { EditCarComponent } from './car/edit-car/edit-car.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HttpClientModule} from "@angular/common/http";
// import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
// import {TokenInterceptor} from "./core/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,
    LoginComponent,
    AddCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
