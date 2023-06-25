import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
 
  myForm:any= FormGroup ;
  submit=false
  employees = Array();
  storedData:any

  countries = [
    { name: 'India' },
    { name: 'United States' },
    { name: 'Canada' },
    { name: 'United Kingdom' },
  ];
  
constructor(private router: Router) { }

get form(){
  return this.myForm.controls;
}

submitForm() {
  this.submit=true
    
  if (this.myForm.valid){
      // console.log("valid")
      // localStorage.setItem('formData', JSON.stringify(this.myForm.value));

      const newEmployee = {
        id: this.employees.length + 1,
        firstName: this.myForm.value.firstName,
        lastName: this.myForm.value.lastName,
        email: this.myForm.value.email,
        mobileNumber: this.myForm.value.mobileNumber,
        country: this.myForm.value.country
      };

      // Add the new employee to the list
      this.employees.push(newEmployee);

      // Save the updated employee list to local storage
      localStorage.setItem('employees', JSON.stringify(this.employees));

      // clear the form
  
      // this.myForm.get('firstName').setValue(null);
      // this.myForm.get('lastName').setValue(null);
      // this.myForm.get('email').setValue(null);
      // this.myForm.get('mobileNumber').setValue(null);
      // this.myForm.get('country').setValue(null);
      // this.submit=false

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

      this.storedData = localStorage.getItem('employees');
      
      this.employees = JSON.parse(this.storedData);
      if(this.employees==null){
        this.employees=[]
      }
      console.log("Array=",this.employees)
    
    }
  
  }
  
