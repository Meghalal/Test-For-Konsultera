import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css'],
})
export class EmployeeListingComponent {
constructor(private route: ActivatedRoute, private router: Router) { }
dataArray=Array();
employeeArray=Array();
deleteName=""
deleteIndex:any
searchResults=Array();
searchTerm:string=""
page:any;

//--------function for routing to create employee page-----------//
createEmployee(){
  this.router.navigate(['/EmployeeCreation']);
}
//--------function for routing to update employee page-----------//
updateEmployee(index:any){
  this.router.navigate(['/EmployeeUpdation'],{queryParams:{setData:JSON.stringify({index})}});
}

//--------function for set delete data-----------//
setDelete(name:any,index:any){
 
  this.deleteName=name
  this.deleteIndex=index
}

//-------function for delete an employee--------//
deleteEmployee(){
  this.dataArray.splice(this.deleteIndex, 1);
  localStorage.setItem('employees', JSON.stringify( this.dataArray));
  this.ngOnInit();
}

//-----function for employee search-------------------//
search(): void {
  console.log(this.searchTerm)
  this.dataArray= this.employeeArray.filter(item =>
    item.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

ngOnInit(): void {
  const storedData = localStorage.getItem('employees');
    if (storedData) {
      this.employeeArray = JSON.parse(storedData);
      this.dataArray=this.employeeArray
    }
 
  }

}
