import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';

@Component({
  selector: 'page-route-real-time',
  templateUrl: 'route-real-time.html'
})
export class RouteRealTimePage {
  public option : any = [];

  constructor(public navCtrl: NavController, private profileProvider: ProfileProvider, public navParams: NavParams) {
  }


  ionViewWillEnter(){
    this.option = this.navParams.get('optionRoute');
    console.log(this.option);
  }
}
