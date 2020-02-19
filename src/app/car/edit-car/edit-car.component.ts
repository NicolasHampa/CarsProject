import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Car} from '../../model/car.model';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  user: Car;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    const userId = window.localStorage.getItem('editCarId');
    if (!userId) {
      alert('Invalid action.')
      this.router.navigate(['list-cars']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [''],
      vehicle: ['', Validators.required],
      brand: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      __v: ['']
    });
    console.log(userId);
    this.apiService.getUserById(userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('Car updated successfully.');
            this.router.navigate(['list-cars']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}