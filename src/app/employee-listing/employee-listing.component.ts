import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  CreateEmployee(){
   // this.router.navigateByUrl(('/EmployeeCreation'));
   this.router.navigate(['/EmployeeCreation']);
  }

}
