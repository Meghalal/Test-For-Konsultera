import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  //postUrl='http://192.241.151.66:5000/login';
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
    // this.logServices.Login(this.data).subscribe((res)=>{
          
    //   this.output=res.data
   
    //  if(res.success=="true" && this.output[0].user_type=="Admin")
    // {
    
    //   localStorage.setItem('token',"1234");
    //   localStorage.setItem('userType','admin')
      
    //   this.router.navigate(['/admin'])
    //   localStorage.setItem('admin_id',this.output[0].user_id)
     
    // }
    // else
    // {
    //   this.msg3="Wrong user name or password"
    // }
   
  
    // })
     
  };
  
    ngOnInit(): void {
    }
  
  }
  
