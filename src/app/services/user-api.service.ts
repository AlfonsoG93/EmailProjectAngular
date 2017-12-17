import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

export class User {
  //sign up form
  fullname: string;

  // sign up & log in forms
  username: string;
  password: string;

  //assign by the database
  _id: string;
  createdAt: string;
  updatedAt: string;
}
@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThang: HttpClient) { }

  //POST /api/Signup
  postSignUp(userInfo: User) {
    return this.httpThang.post(
      `${environment.backendUrl}/api/signup`,
      userInfo,
      { withCredentials: true }
    ).toPromise()
      .then((apiResult: any) => {
        // update "currentUser" since we are logged in
        this.currentUser = apiResult.userInfo;
        //return "apiResult" for the component
        return apiResult;
      })
  }

  //POST /api/Login
  postLogin(userInfo: User) {
    return this.httpThang.post(
      `${environment.backendUrl}/api/login`,
      userInfo,
      { withCredentials: true }
    )
      .toPromise()
      .then((apiResult: any) => {
        // update "currentUser" since we are logged in
        this.currentUser = apiResult.userInfo;
        //return "apiResult" for the component
        return apiResult;
      });
  }

  //DELETE /api/logout
  logout() {
    return this.httpThang.delete(
      `${environment.backendUrl}/api/logout`,
      { withCredentials: true }
    ).toPromise()
      .then((apiResult) => {
        // update "currentUser" since we are logged out
        this.currentUser = null;
        //return apiResult for the component
        return apiResult;
      });
  }

  //GET /api/Login
  getCheckLogin() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/checklogin`,
      //send the cookie even to the different Domain
      { withCredentials: true }
    )
      .toPromise()
      .then((apiResult: any) => {
        //update "currentUser" in case we are logged in
        this.currentUser = apiResult.userInfo;
        // return "apiResult" for the component
        return apiResult;
      });
  }

}
