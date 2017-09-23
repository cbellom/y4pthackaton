import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DataMock } from '../../mocks/data';
/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  public profile : any = {};

  constructor(public http: Http) {
    console.log('Hello ProfileProvider Provider');
    this.selectRandomProfile();
  }

  selectRandomProfile(){
    let index = Math.floor(Math.random() * DataMock.profiles.length)
    this.profile = DataMock.profiles[index];
  }

}
