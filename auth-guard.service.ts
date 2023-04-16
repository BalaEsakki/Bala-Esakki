import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  login: any;
  userService: any[] = [];
  result = false;
  constructor(public eds: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const users = this.eds.getEmployeeData();
    this.login = this.eds.loginData;
    if(users){
      const datas : any = JSON.parse(users);
      this.userService.push(datas)
      this.userService.forEach((eData: any)=> {
        if(this.login){
          this.result = true;
        }
        else{
          this.router.navigate(['/loginPage']);
        }
      })
    }
    if(this.result){
      return true;
    }
    else{
      return false; 
    }
  }

}

