import { Injectable } from "@angular/core";
import { Activity, ActivityState } from "../model/activity";

@Injectable({
    providedIn: 'root',
  })
export class ActivityService{
    activityList :Activity[] = [
        {id: 1, name: 'volet', state: ActivityState.active,location:"chambre"},
        {id: 2, name: 'lumiere', state: ActivityState.desactive,location:'salon'},
      ];
    constructor(){
        
    }
    getActivityList(): Activity[]{
        return this.activityList;
    }

    getActivityById(id : number): any{
       let activityFound;
        this.activityList.forEach((activity)=>{
            if(activity.id == id){
                console.log("affichage en detail "+ activity.name)
                activityFound = activity;
            }
          });
          return activityFound;

    }

    changerEtat(element:Activity){
      console.log("changement d'etat")
  
      this.activityList.forEach((activity)=>{
        if(activity.id === element.id){
            console.log("changement d'etat  de l'element "+ element.name)
            if(activity.state == ActivityState.active){
              activity.state = ActivityState.desactive;
            }else{
              activity.state =ActivityState.active;
            }
        }
      });
    }
}