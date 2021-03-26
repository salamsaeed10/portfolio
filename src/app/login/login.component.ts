import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{ Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string=""

loginRef=new FormGroup({
  user:new FormControl(),
  pass:new FormControl(),
 
})
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any){

console.log(loginRef)
let user=this.loginRef.get("user")
let pass=this.loginRef.get("pass")

let key
alert( " Successfully Log In")

  }

  homePage(){
this.router.navigate(["login"])
  }

  Page(){
    this.router.navigate(["signup"]) 
  }
}
