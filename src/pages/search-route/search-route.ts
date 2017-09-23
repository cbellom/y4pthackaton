import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultRoutesPage } from '../result-routes/result-routes';
import { ProfileProvider } from '../../providers/profile/profile';

@Component({
  selector: 'page-search-route',
  templateUrl: 'search-route.html'
})
export class SearchRoutePage {
  public points : any = [];

  constructor(public navCtrl: NavController, private profileProvider: ProfileProvider) {
    this.points = profileProvider.profile.historyRoutes;
  }
  goToResultRoutes(params){
    if (!params) params = {};
    this.navCtrl.push(ResultRoutesPage);
  }
}
