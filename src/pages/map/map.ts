import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { RestApiService } from '../../providers/rest/rest-api-service';
import { LocationTrackerProvider } from '../../providers/location/location-tracker';
import { DataMock } from '../../mocks/data';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map: any;
  heatmap : any;
  heatmapData = new google.maps.MVCArray([]);
  data : any = [];
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  frame: number = 0;

  constructor(public navCtrl: NavController,
    public geolocation: Geolocation,
    private restService: RestApiService,
    public locationTracker: LocationTrackerProvider) {
  }

  ionViewDidLoad(){
    this.getPosition();
    this.locationTracker.startTracking();
    this.loadData();
  }

  getPosition():any{
    this.locationTracker.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    this.getMapStyle().then((style_array) => {
      this.map.setOptions({styles: style_array});
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!',
        icon: 'assets/maps/pin-current-position.png',
      });
      mapEle.classList.add('show-map');
      this.showData();
      this.showRoute();
    });


  }

  getMapStyle(): any {
    return this.restService.doGet('assets/maps/map-style.json');
  }

  loadData(){
    this.data = DataMock.positionData;
  }

  showData() {
    for (var i = 0; i < this.data.length; i++) {
      let latLng = new google.maps.LatLng(this.data[i].latitude as number, this.data[i].longitude as number);
      this.heatmapData.push(latLng);
    }

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatmapData,
      map: this.map,
      radius: 16
    });
  }

  showRoute(){
    let _this = this;

    var route1 = this.calculateAndDisplayRoute('bogota, universidad nacional', 'bogota, calima');
    var route2 = this.calculateAndDisplayRoute('bogota, aeropuerto', 'bogota, centro');
    var route3 = this.calculateAndDisplayRoute('bogota, centro', 'bogota, calle 75');
    var route4 = this.calculateAndDisplayRoute('bogota, soacha', 'bogota, Universidad EAN');

    Promise.all([route1, route2, route3, route4]).then(results => {
      console.log(results);
        if(results){
          setInterval(function(){
            _this.frame ++;
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();
            _this.heatmapData.pop();

            if(results[0].routes[0].overview_path.length > _this.frame){
              let latLng1 = results[0].routes[0].overview_path[_this.frame];
              _this.heatmapData.push(latLng1);
              _this.heatmapData.push(latLng1);
              _this.heatmapData.push(latLng1);
            }

            if(results[1].routes[0].overview_path.length > _this.frame){
              let latLng2 = results[1].routes[0].overview_path[_this.frame];
              _this.heatmapData.push(latLng2);
              _this.heatmapData.push(latLng2);
              _this.heatmapData.push(latLng2);
            }

            if(results[2].routes[0].overview_path.length > _this.frame){
              let latLng3 = results[2].routes[0].overview_path[_this.frame];
              _this.heatmapData.push(latLng3);
              _this.heatmapData.push(latLng3);
              _this.heatmapData.push(latLng3);
            }

            if(results[3].routes[0].overview_path.length > _this.frame){
              let latLng4 = results[3].routes[0].overview_path[_this.frame];
              _this.heatmapData.push(latLng4);
              _this.heatmapData.push(latLng4);
              _this.heatmapData.push(latLng4);
            }

          }, 500);
        }
    });
  }

  calculateAndDisplayRoute(start, end) : Promise<any>{
    return new Promise((resolve) => {
      this.directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          console.log(response);
          resolve(response);
        } else {
          resolve(null);
        }
      });
    });

  }

}
