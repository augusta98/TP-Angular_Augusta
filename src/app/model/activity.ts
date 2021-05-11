export class Activity{
    id: number
     name: string;
     state: ActivityState
     location: string;

    constructor(id: number, name: string, state: ActivityState, location:string){
        this.id = id;
        this.name = name;
        this.state = state;
        this.location = location;
    }
}

export enum ActivityState{
    active = "Active", desactive = "Desactif"
}

 
