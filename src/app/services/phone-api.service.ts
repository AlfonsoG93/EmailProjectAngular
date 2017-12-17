import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Phone {

  name: string;
  brand: string;
  image: string;
  specs: string[];

  //these are assigned by the database
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class PhoneApiService {

  constructor(private httpThang: HttpClient) { }


  // GET /api/phones
  getPhones() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/phones`,
      { withCredentials: true }
    ).toPromise();
  }

  //POST /api/service

  //GET /api/phones/:id
  getOnePhone(oneId: string) {
    return this.httpThang.get(
      `${environment.backendUrl}/api/phones/${oneId}`,
      { withCredentials: true }
    ).toPromise();
  }
  //DELETE /api/phones/:id
  deleteOnePhone(oneId: string) {
    return this.httpThang.delete(
      `${environment.backendUrl}/api/phones/${oneId}`,
      //Send cookies even to a different domain
      { withCredentials: true }
    ).toPromise();
  }
}
