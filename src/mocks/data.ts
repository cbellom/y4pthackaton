import {Injectable} from '@angular/core';

@Injectable()
export class DataMock {

  static profiles : any = [
      {
          name: "Juana",
          photo: "assets/img/profile1.jpg",
          historyRoutes:[
            {title: "Desde Unal a Casa", type:"Bicycle + Walk"},
            {title: "Desde Unal a Banco", type:"Walk"},
            {title: "Desde Casa a Biblioteca", type:"Bicycle + Bus"},
            {title: "Desde Centro comercial a Casa", type:"Walk"},
          ],
          searchedRoutes:[
            {
              time:"25 min",
              money:"$0",
              route: [
                {begin: "walk", end:"flag"}
              ],
              pros: [
                "logo-usd",
                "leaf",
                "medkit"
              ]
            },
            {
              time:"20 min",
              money:"$0",
              route: [
                {begin: "walk", end:"bicycle"},
                {begin: "bicycle", end:"flag"}
              ],
              pros: [
                "logo-usd",
                "leaf",
                "medkit"
              ]
            },
            {
              time:"20 min",
              money:"$2200",
              route: [
                {begin: "bus", end:"flag"}
              ],
              pros: [ ]
            }
          ],
      },
      {
          name: "Pedro",
          photo: "assets/img/profile2.jpg",
          historyRoutes:[
            {title: "desde Compensar a Casa", type:"Bus"},
            {title: "desde CAD a Nietos", type:"Bus"},
          ],
          searchedRoutes:[
            {
              time:"10 min",
              money:"$2200",
              route: [
                {begin: "bus", end:"flag"}
              ],
              pros: [
                "time"
              ]
            },
            {
              time:"10 min",
              money:"$2200",
              route: [
                {begin: "car", end:"flag"}
              ],
              pros: [ ]
            },
          ],
      },
      {
          name: "Maria",
          photo: "assets/img/profile3.jpg",
          historyRoutes:[
            {title: "Desde Trabajo a Casa", type:"Bus"},
            {title: "Desde Casa a Abuelita", type:"Caminar"},
            {title: "Desde Abuelita a Trabajo", type:"Caminar + Bus"}
          ],
          searchedRoutes:[
            {
              time:"30 min",
              money:"$2200",
              route: [
                {begin: "bus", end:"flag"},
              ],
              pros: [
                "logo-usd"
              ]
            },
            {
              time:"25 min",
              money:"$4400",
              route: [
                {begin: "bus", end:"bus"},
                {begin: "bus", end:"flag"}
              ],
              pros: [  ]
            },
          ],
      },
      {
          name: "Edwin",
          photo: "assets/img/profile4.jpg",
          historyRoutes:[
            {title: "Desde Casa a Parque", type:"Cicla"},
            {title: "Desde Casa a Centro comercial", type:"Caminar"},
            {title: "Desde Trabajo a Casa", type:"Cicla"}
          ],
          searchedRoutes:[
            {
              time:"40 min",
              money:"$0",
              route: [
                {begin: "bicycle", end:"flag"}
              ],
              pros: [
                "logo-usd",
                "leaf",
                "medkit"
              ]
            },
            {
              time:"20 min",
              money:"$2200",
              route: [
                {begin: "bus", end:"bicycle"},
                {begin: "bicycle", end:"flag"}
              ],
              pros: [
                "time"
              ]
            }
          ],
      },
    ];

    static positionData : any = [
      {latitude: 4.6400083,longitude: -74.0969877},
      {latitude: 4.6420258,longitude: -74.1039908},
      {latitude: 4.6420258,longitude: -74.1039908},
      {latitude: 4.6340217,longitude: -74.0890898},
      {latitude: 4.6340217,longitude: -74.0890898},
      {latitude: 4.6420258,longitude: -74.1039908}
    ]
}
