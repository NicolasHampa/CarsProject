import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddCarComponent } from "./car/add-car/add-car.component";
import { ListCarsComponent } from "./car/list-cars/list-cars.component";
import { EditCarComponent } from "./car/edit-car/edit-car.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'list-cars', component: ListCarsComponent },
  { path: 'edit-car', component: EditCarComponent },
  { path : '', component : LoginComponent }
];

export const routing = RouterModule.forRoot(routes);