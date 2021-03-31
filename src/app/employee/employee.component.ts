import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../employee.service'



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  StoreUser(empRef:any){
    console.log(empRef)
    this.empSer.storeEmployee(empRef)
  }

 /* callFakeService(){
    this.empSer.LoadEmpDetails().subscribe(data=>this.fakeData=data)
  }*/
}


