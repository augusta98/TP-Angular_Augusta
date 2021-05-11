import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthentificationService } from '../service/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isForminValid = false;
  areCredentiaIsInvalid = false;

  constructor(private authentificationService:AuthentificationService) { }

  ngOnInit(): void {
  }
onSubmit(signInForm: NgForm){
  console.log("Button sign in click")
  if(!signInForm.valid){
    this.isForminValid = true;
    this.areCredentiaIsInvalid = false;
    return;
  }
  
this.checkCredential(signInForm);
}
private checkCredential(signInForm:NgForm) {
  console.log("dans checkCredential")
  const signInData = new SignInData(signInForm.value.email,signInForm.value.password);
  if(!this.authentificationService.authentification(signInData)
      ){
        this.isForminValid = false;
        this.areCredentiaIsInvalid = true;

  }
}
}
