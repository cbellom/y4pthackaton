import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchRoutePage } from '../search-route/search-route';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToSearchRoute(params){
    if (!params) params = {};
    this.navCtrl.push(SearchRoutePage);
  }
}
