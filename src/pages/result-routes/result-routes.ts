import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RouteRealTimePage } from '../route-real-time/route-real-time';

@Component({
  selector: 'page-result-routes',
  templateUrl: 'result-routes.html'
})
export class ResultRoutesPage {

  constructor(public navCtrl: NavController) {
  }
  goToRouteRealTime(params){
    if (!params) params = {};
    this.navCtrl.push(RouteRealTimePage);
  }
}
