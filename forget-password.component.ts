import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, TitleStrategy } from '@angular/router';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPass: FormGroup;
  users: any[] = [];
  invalid: any;
  findData: any;
  userId: any;
  forgotPassword = false;
  submitted = false;
  forgotMail: FormGroup;

  constructor(public eds:UserService, private router : Router ) { 
    this.forgotMail = new FormGroup (
      {
        emailId: new FormControl ('', [Validators.required, Validators.email, Validators.pattern('(?=.*[a-z])(?=.*[@])(?=.*[.])(?=.*[a-z]).{8,10}')]),
      }
      )
      this.forgotPass = new FormGroup(
        {
          newPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,10}')]),
          confirmPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,10}')]),
        }
    )
  }
  forgotValidate() {
    if(this.forgotPass.value.newPassword == this.forgotPass.value.confirmPassword){
      this.findData = this.users.findIndex(item => item.id = this.userId)
      this.users[this.findData].password = this.forgotPass.value.confirmPassword ;
      const confirmPsw = JSON.stringify(this.users);
      this.eds.setEmployeeData(confirmPsw);
      // console.log(this.users)
      this.router.navigate(['/loginPage'])
    }
    else{
      this.invalid = "Password do not match..";
    }
  }
  change(){
    this.submitted = true;
    for(let user of this.users){
      if(user.emailId == this.forgotMail.value.emailId){
        this.forgotPassword = true;
        this.userId = user.id;
      }
      // else{
      //   this.invalid = "Enter Valid Email..!";
      // }
    }
  }
  ngOnInit(): void {
    const datas = this.eds.getEmployeeData();
    if(datas){
      const parsedData = JSON.parse(datas);
      this.users = this.users.concat(parsedData);
    }
  }

}
