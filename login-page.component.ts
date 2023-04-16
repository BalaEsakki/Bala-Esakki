import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  getData: any[] = [];
  invalidMsg: any;
  colSpan = "2";
  sideheading = "Welcome to your WebPage";
  submitted = false;
  constructor(public eds:UserService, private router : Router ) { 
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[@])(?=.*[.])(?=.*[a-z]).{8,100}')]),
        password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,10}')]),
      }
    )
  }
  notLogin(){
    alert("Login to Continue")
  }
  loginValid(){
    this.submitted = true;
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      for(let emp of this.getData){
        console.log(emp.email,emp.password)
        if(emp.emailId === this.loginForm.value.email && emp.password === this.loginForm.value.password){
          // console.log("test")
          const data = this.loginForm.value;
          this.eds.getLogin(data)
          this.router.navigate(['/searchTrain'])
        }
        else{
          this.invalidMsg = "Invalid email or password..!";
        }
      }
    }
  }

  ngOnInit(): void {
    const datas = this.eds.getEmployeeData();
    if(datas){
      const parsedData = JSON.parse(datas);
      this.getData = this.getData.concat(parsedData)
    }

  }

}
