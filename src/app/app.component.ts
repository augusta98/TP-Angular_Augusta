import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP-Angular';

  constructor( public authentificationService:AuthentificationService){

  }
  logout(){
    this.authentificationService.logout();
  }
}
