import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RouteRealTimePage } from '../route-real-time/route-real-time';
import { ProfileProvider } from '../../providers/profile/profile';

@Component({
  selector: 'page-result-routes',
  templateUrl: 'result-routes.html'
})
export class ResultRoutesPage {
  public results : any = [];

  constructor(public navCtrl: NavController, private profileProvider: ProfileProvider) {
  }

  ionViewWillEnter(){
    this.results = this.profileProvider.profile.searchedRoutes;
    console.log(this.results);
  }

  goToRouteRealTime(params){
    if (!params) params = {};
    this.navCtrl.push(RouteRealTimePage);
  }
}
