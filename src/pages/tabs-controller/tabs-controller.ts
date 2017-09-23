import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { SearchRoutePage } from '../search-route/search-route';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = MapPage;
  tab2Root: any = SearchRoutePage;
  tab3Root: any = ReportPage;
  constructor(public navCtrl: NavController) {
  }
  
}
