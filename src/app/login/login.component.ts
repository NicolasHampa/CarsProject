import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   const loginPayload = {
  //     username: this.loginForm.controls.username.value,
  //     password: this.loginForm.controls.password.value
  //   }
  //   this.apiService.login(loginPayload).subscribe(data => {
  //     debugger;
  //     if(data.status === 200) {
  //       window.localStorage.setItem('token', data.result.token);
  //       this.router.navigate(['list-cars']);
  //     }else {
  //       this.invalidLogin = true;
  //       alert(data.message);
  //     }
  //   });
  // }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4MTIzIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NDEwNjIzOTMsImV4cCI6MTU0MTA4MDM5M30.DMoB5kv72X7Jf-U5APdjK3UUcGomA9NuJj6XGxmLyqE');
    this.router.navigate(['list-cars']);
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}