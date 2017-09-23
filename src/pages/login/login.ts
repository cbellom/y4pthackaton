import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchRoutePage } from '../search-route/search-route';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  goToMap(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }


  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(SearchRoutePage);
  }
}
