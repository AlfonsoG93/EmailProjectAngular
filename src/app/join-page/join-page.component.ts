import { Component, OnInit } from '@angular/core';

import { UserApiService, User } from '../services/user-api.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  theUser = new User();

  constructor(private userThang : UserApiService) { }

  ngOnInit() {
  }

}
