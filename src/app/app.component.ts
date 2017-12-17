import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private routerThang: Router,
    private userThang: UserApiService){}

  ngOnInit(){
    this.userThang.getCheckLogin()
    //no ".then()" because "getCheckLogin()"
    //already has the ".then()" that what we need
    .catch((err) => {
      alert("sorry! Something went wrong.");
      console.log(err);
      console.log("Sorry Something went wrong");
    });
  }

  startLogOutAjax() {
    this.userThang.logout()
    .then(() => {
      this.routerThang.navigate(['/']);
    })
    .catch((err) => {
      alert("Sorry! Something went wrong!");
      console.log("Log Out Error!")
      console.log(err);
    })
  }
}
