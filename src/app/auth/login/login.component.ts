import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  passWord : string;
  loggedIn : boolean = false;  
  constructor() { }

  ngOnInit() {
  }

  submitLogin() {
    this.loggedIn = !this.loggedIn;
  }

}
