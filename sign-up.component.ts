import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  genders = [' Male', ' Female', ' Others'];
  signUpForm: FormGroup;
  employeeLength = '';

  submitted = false;

  constructor(public eds: UserService, private router: Router) {

    this.signUpForm = new FormGroup(
      {
        fName: new FormControl('', [Validators.required, Validators.minLength(3), this.noSpaceAllowed]),
        lName: new FormControl('', [Validators.required, Validators.minLength(3), this.noSpaceAllowed]),
        email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[@])(?=.*[.])(?=.*[a-z]).{8,100}')]),
        password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,10}')]),
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('', Validators.required),
      }
    );
  }
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }
 
  ngOnInit(): void {
    const empLength = this.eds.getEmployeeData();
    if (empLength) {
      const data = JSON.parse(empLength);
      this.employeeLength = data.length;
    }

  }
  addEmployeeData() {
    this.submitted = true;
    if (this.signUpForm.valid) {

      let data = [];



      const employeeData = {
        id: Math.floor(Math.random() * 1000) + 1,
        firstName: this.signUpForm.value.fName,
        lastName: this.signUpForm.value.lName,
        emailId: this.signUpForm.value.email,
        dob: this.signUpForm.value.dob,
        password: this.signUpForm.value.password,
        gender: this.signUpForm.value.gender
      };

      data.push(employeeData);
      const datas = this.eds.getEmployeeData();
      if (datas) {
        const parsedData = JSON.parse(datas);
        // console.log(typeof JSON.parse(datas))
        data = data.concat(parsedData);
      }
      this.eds.setEmployeeData(JSON.stringify(data));
      this.router.navigate(['loginPage']);

    };

  }

}

  // onSubmit(){
  //   localStorage.setItem('user', JSON.stringify(this.signUpForm.value))
  // }

  // onSubmit() {
  //   let signUpForm: any[];
  //   const userService = new UserService();
  //   userService.onSubmit(this.signUpForm.value);
  // }
  // onSubmit(){
  //   const userService = new UserService();
  //   userService.onSubmitClicked();
  // }
  // onSubmit(){
  //   let userData = {}
  //   userData = this.signUpForm.value;
  //   this._httpService.signUp(userData).subscribe((result))=>{
  //     console.log(result);
  //   }
  // }

