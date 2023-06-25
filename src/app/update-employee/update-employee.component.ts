import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  myForm:any= FormGroup ;
  submit=false
  employees = Array();
  storedData:any

  getdata: any = [];
  setData: any;
  array: any;
  Employee_index:any

  countries = [
    { name: 'India' },
    { name: 'United States' },
    { name: 'Canada' },
    { name: 'United Kingdom' },
  ];
  
constructor(private router: Router,private route: ActivatedRoute) { }

get form(){
  return this.myForm.controls;
}

submitForm() {
  this.submit=true
  
  if (this.myForm.valid){
      const newEmployee = {
        id: this.employees.length + 1,
        firstName: this.myForm.value.firstName,
        lastName: this.myForm.value.lastName,
        email: this.myForm.value.email,
        mobileNumber: this.myForm.value.mobileNumber,
        country: this.myForm.value.country
      };

      // Add the new employee to the list
      this.employees[this.Employee_index]=newEmployee;

      // Save the updated employee list to local storage
      localStorage.setItem('employees', JSON.stringify(this.employees));
      //-------------routing to employee listing-------------
      this.router.navigate(['']);
     
  }
  
      
  }
  
    ngOnInit(): void {

      this.myForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
        lastName: new FormControl('', Validators.required),
        mobileNumber: new FormControl('',[Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]),
        email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
        country: new FormControl('', Validators.required),
        
      });

      //--------------get updating employee id-------------------------------
      this.route.queryParams.subscribe((params) => {
        this.getdata = params;
        this.setData = this.getdata.setData;
        const obj = JSON.parse(this.setData);
        this.array = [obj];
        console.log("this array=", this.array[0].index)
        this.Employee_index = this.array[0].index;
        
      })

      this.storedData = localStorage.getItem('employees');
      this.employees = JSON.parse(this.storedData);
      const accessedData = this.employees[this.Employee_index];
      console.log("update data=",accessedData)
      this.myForm.patchValue(accessedData);


    }
  
  }
  
