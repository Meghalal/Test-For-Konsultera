import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'EmployeeCreation', component: CreateEmployeeComponent},
  { path: 'EmployeeUpdation', component: UpdateEmployeeComponent},
  { path: '', component: EmployeeListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
