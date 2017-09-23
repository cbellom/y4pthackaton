import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { SearchRoutePage } from '../pages/search-route/search-route';
import { ReportPage } from '../pages/report/report';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { ResultRoutesPage } from '../pages/result-routes/result-routes';
import { RouteRealTimePage } from '../pages/route-real-time/route-real-time';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    SearchRoutePage,
    ReportPage,
    TabsControllerPage,
    LoginPage,
    ResultRoutesPage,
    RouteRealTimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    SearchRoutePage,
    ReportPage,
    TabsControllerPage,
    LoginPage,
    ResultRoutesPage,
    RouteRealTimePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}