import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Car} from "../../model/car.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  users: Car[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data['cars'];
      });
  }

  deleteUser(user: Car): void {
    this.apiService.deleteUser(user._id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  editUser(user: Car): void {
    window.localStorage.removeItem('editCarId');
    window.localStorage.setItem('editCarId', user._id.toString());
    this.router.navigate(['edit-car']);
  }

  addUser(): void {
    this.router.navigate(['add-car']);
  }
}