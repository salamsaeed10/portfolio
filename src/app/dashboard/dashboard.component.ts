import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  skillInfo:any=""
  msg:any=" "

 /* public task:Array<Task>=[];
  public tempTask=new Task("","","");
  body= document.getElementById("taskBody")
  public display:string[]=['id','name','task','date']
   constructor(public taskRetriever:TaskRetrieverService){}*/
  constructor() { }

  ngOnInit(): void {
  }
  
  /*addSkill(skill:any){
  console.log(`Contact Name ${skill}`)
  this.skillInfo=skill;
}

/*fun(){
  this.msg="hello"
}*/

StoreUser(empRef:any){
console.log(empRef)


//const arr: Array<{id: number, name: string, task:string,deadline:Date}> = [];
//arr.push({id})
}

}