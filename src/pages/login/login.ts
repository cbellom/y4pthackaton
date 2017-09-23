import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchRoutePage } from '../search-route/search-route';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public code:string;
  constructor(public navCtrl: NavController) {
    this.code = "+57";
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
