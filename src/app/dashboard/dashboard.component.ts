import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  skillInfo:string=""
  constructor() { }

  ngOnInit(): void {
  }
  addSkill(skill:any){
    console.log(`Contact Name ${skill}`)
    this.skillInfo=skill;
}
}