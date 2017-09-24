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

import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiService } from '../providers/rest/rest-api-service';
import { HttpModule } from '@angular/http';
import { ProfileProvider } from '../providers/profile/profile';
import { LocationTrackerProvider } from '../providers/location/location-tracker';

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
    HttpModule,
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
    Geolocation,
    BackgroundGeolocation,
    RestApiService,
    LocationTrackerProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileProvider
  ]
})
export class AppModule {}
