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
EmployeeArray=Array();
DeleteName=""
DeleteIndex:any
searchResults=Array();
searchTerm:string=""
PageCount=1

//--------function for routing to create employee page-----------//
CreateEmployee(){
  this.router.navigate(['/EmployeeCreation']);
}
//--------function for routing to create employee page-----------//
UpdateEmployee(index:any){
  this.router.navigate(['/EmployeeUpdation'],{queryParams:{setData:JSON.stringify({index})}});
 
}

//--------function for set delete data-----------//
SetDelete(name:any,index:any){
 
  this.DeleteName=name
  this.DeleteIndex=index
}

//-------function for delete an employee--------//
DeleteEmployee(){
  this.dataArray.splice(this.DeleteIndex, 1);
  localStorage.setItem('employees', JSON.stringify( this.dataArray));
  this.ngOnInit();
}

//-----function for employee search-------------------//
search(): void {
  console.log(this.searchTerm)
  this.dataArray= this.EmployeeArray.filter(item =>
    item.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

ngOnInit(): void {
  const storedData = localStorage.getItem('employees');
    if (storedData) {
      this.EmployeeArray = JSON.parse(storedData);
      this.dataArray=this.EmployeeArray
    }
 
  }

}
