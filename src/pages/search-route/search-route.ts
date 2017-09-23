import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultRoutesPage } from '../result-routes/result-routes';

@Component({
  selector: 'page-search-route',
  templateUrl: 'search-route.html'
})
export class SearchRoutePage {

  constructor(public navCtrl: NavController) {
  }
  goToResultRoutes(params){
    if (!params) params = {};
    this.navCtrl.push(ResultRoutesPage);
  }
}
