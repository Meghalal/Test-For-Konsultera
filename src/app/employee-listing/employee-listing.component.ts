import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent {
constructor(private route: ActivatedRoute, private router: Router) { }

  //--------function for routing to create employee page-----------//
  CreateEmployee(){
   this.router.navigate(['/EmployeeCreation']);
  }
  //--------function for routing to create employee page-----------//
  UpdateEmployee(){
    this.router.navigate(['/EmployeeUpdation']);
  }

}
