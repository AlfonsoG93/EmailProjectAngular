import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserApiService, User} from '../../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  theUser = new User();

  constructor(
    private routerThang: Router,
    private userThang: UserApiService
  ) { }

  ngOnInit() {
  }

  startSignUpAjax(){
    this.userThang.postLogin(this.theUser)
    .then(() => {
      this.routerThang.navigate(['/phones']);
    })
    .catch((err) =>{
      alert('Sorry! Something went wrong');
      console.log('Log in Error');
      console.log(err);
    })
  }


}
