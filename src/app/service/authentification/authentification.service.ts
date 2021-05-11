import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private readonly mockedUser = new SignInData('Admin@gmail.com','test12345');
  isAuthenticated = false;

  constructor(private router:Router) { }
  authentification(signInData:SignInData):boolean{
    console.log("dans la methode authentification")
    if(this.checkCredentials(signInData)){

      this.isAuthenticated = true;
      this.router.navigate(['Home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;

  }
  private checkCredentials(signInData:SignInData):boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());

  }
private checkEmail(email:string):boolean{
   
  return email=== this.mockedUser.getEmail();
}
private checkPassword(password:string):boolean{
  return password === this.mockedUser.getPassword();

}
logout(){
  this.isAuthenticated = false;
  this.router.navigate(['']);
}
}
