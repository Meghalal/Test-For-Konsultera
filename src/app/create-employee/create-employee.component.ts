import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  msg1=""
  msg2=""
  msg3=""
  output: any=[];
  showPassword : boolean = false;
  myForm:any= FormGroup ;
  submit=false

  countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    // Add more country objects as needed
  ];
  
  constructor(private router: Router) { }
  data={
    username:"",
    password:"",
    user_type:"Admin"||"User"
  }
  
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }
  
  valuechange1(newValue1: any) {
    this.data.username=newValue1
    this.msg1=""
    this.msg3=""
  }
  valuechange2(newValue2: any) {
    this.data.password=newValue2
    this.msg2=""
    this.msg3=""
  }
  btnClick=  () => {
   if(this.data.username=="" && this.data.password=="")
   {
    this.msg1="Invalid user name";
    this.msg2="Invalid password";
    return;
   }
   if(this.data.password=="")
   {
    this.msg2="Invalid password"
    return;
   }
   if(this.data.username==""){
    this.msg1="Invalid user name";
    return;
   }
     
  };

  
mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const mobileNumberRegex = /^[1-9]\d{9}$/; 

    if (control.value && !mobileNumberRegex.test(control.value)) {
      return { 'invalidMobileNumber': true };
    }

    return null;
  };
}

get form(){
  return this.myForm.controls;
}

  submitForm() {
    this.submit=true
    
    if(this.myForm.get('firstName').errors.required){
      this
    }
    
    // if (this.myForm.valid) {
    //   // Form is valid, perform form submission logic here
    //   console.log(this.myForm.value);
    // }
   
  }
  
    ngOnInit(): void {

      this.myForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobileNumber: new FormControl('', [Validators.required, this.mobileNumberValidator()]),
        country: new FormControl('', Validators.required),
        // Add more form controls as needed
      });
    }
  
  }
  
