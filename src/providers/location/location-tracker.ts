import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationTrackerProvider {

    public watch: any;
    public lat: number = 0;
    public lng: number = 0;

    static readonly DEFAULT_POSITION = {
      latitude: 4.6211889,
      longitude: -74.0832406
    }

    constructor(public zone: NgZone,
                private backgroundGeolocation :BackgroundGeolocation,
                private geolocation :Geolocation) {

    }
    public getCurrentPosition() : Promise<any>{
      return new Promise((resolve, reject) => {
        this.geolocation.getCurrentPosition().then((position) => {
          resolve(position)
        }, (err) => {
          console.log(err);
          resolve(LocationTrackerProvider.DEFAULT_POSITION);
        });
      });
    }

    public startTracking() {
      console.log('startTracking');

      this.startBackgroundGeolocation();
      this.watchPosition();
    }

    public stopTracking() {
      console.log('stopTracking');

      this.backgroundGeolocation.finish();
      this.watch.unsubscribe();
    }

    private getBackgroundTrackingConfig () : any{
      return {
        desiredAccuracy: 0,
        stationaryRadius: 20,
        distanceFilter: 10,
        debug: true,
        interval: 2000
      };
    }

    private getForegroundTrackingConfig () : any{
      return {
        frequency: 3000,
        enableHighAccuracy: true
      };
    }

    private updateAngularZone (lar, lng){
      this.zone.run(() => {
        this.lat = lar;
        this.lng = lng;
      });
    }

    private startBackgroundGeolocation(){
      let config = this.getBackgroundTrackingConfig();

      this.backgroundGeolocation.configure(config).subscribe((location) => {
        console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
        this.updateAngularZone(location.latitude, location.longitude);
      }, (err) => {
        console.log(err);
      });

      this.backgroundGeolocation.start();
    }

    private watchPosition(){
      let options = this.getForegroundTrackingConfig();

      this.watch = this.geolocation.watchPosition(options).subscribe((position  :Geoposition)  => {
        if (position.coords != undefined) {
          console.log('New Position');
          console.log(position);
          this.updateAngularZone(position.coords.latitude, position.coords.longitude);
        } else {
          console.log('Error watching position');
        }
      });
    }
}
