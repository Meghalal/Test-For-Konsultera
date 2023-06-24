import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';

const routes: Routes = [
  { path: 'EmployeeCreation', component: CreateEmployeeComponent},
  { path: '', component: EmployeeListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
