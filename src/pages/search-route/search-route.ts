import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultRoutesPage } from '../result-routes/result-routes';

@Component({
  selector: 'page-search-route',
  templateUrl: 'search-route.html'
})
export class SearchRoutePage {
  public points : any = [
    {title: "from University to House", type:"Bicycle + Walk"},
    {title: "from University to Work", type:"Walk"},
    {title: "from Work to House", type:"Bicycle + Bus"},
    {title: "from Work to Bar", type:"Bus"},
  ];

  constructor(public navCtrl: NavController) {
  }
  goToResultRoutes(params){
    if (!params) params = {};
    this.navCtrl.push(ResultRoutesPage);
  }
}
