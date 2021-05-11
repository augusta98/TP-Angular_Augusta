import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Activity } from 'src/app/model/activity';
import { SignInData } from 'src/app/model/signInData';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  isForminValid = false;
  currentActivity : any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private service: ActivityService
    ) { }

  ngOnInit(): void {
    
    const id:any = this.route.snapshot.paramMap.get('id');
    console.log('affiche '+ id)

    this.currentActivity =this.service.getActivityById(id)
    console.log("currentActivity name : "+ this.currentActivity.name)
    console.log("currentActivity state : "+ this.currentActivity.state)
  }
  onSubmit(signInForm: NgForm){
    console.log("Button sign in click")
    if(!signInForm.valid){
      this.isForminValid = true;
      return;
    }
  }

  
  changePage(){
    console.log("retour Hoomee "  )
    this.router.navigate(['Home'])
  }

  changerEtat(){
    console.log("changement d'etat")

    this.service.changerEtat(this.currentActivity)
  }
}
