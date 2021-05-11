import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity, ActivityState } from '../model/activity';
import { ActivityService } from '../service/activity.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today : any;
  displayedColumns: string[] = ['activityName', 'activityState','action'];
  activityList: Activity[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ActivityService
   
  ) { }
  

  ngOnInit(): void {
    this.today = formatDate (new Date(),'EEEE, MMMM d, y, h:mm:ss a','en');
  
    console.log('lelo '+ this.today);
    this.activityList = this.service.getActivityList();
  }

  afficherDetails(element: Activity){
    console.log("Element clique: " + element.name)
    this.router.navigate(['activity',element.id])
   

  }
  

  changerEtat(element:Activity){
    console.log("changement d'etat")

    this.service.changerEtat(element)
  }
}
