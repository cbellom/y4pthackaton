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
          searchedRoutes:[]},
      {
          name: "Pedro",
          photo: "assets/img/profile2.jpg",
          historyRoutes:[
            {title: "desde Compensar a Casa", type:"Bus"},
            {title: "desde CAD a Nietos", type:"Bus"},
          ],
          searchedRoutes:[]
      },
      {
          name: "Maria",
          photo: "assets/img/profile3.jpg",
          historyRoutes:[
            {title: "Desde Trabajo a Casa", type:"Bus"},
            {title: "Desde Casa a Abuelita", type:"Caminar"},
            {title: "Desde Abuelita a Trabajo", type:"Caminar + Bus"}
          ],
          searchedRoutes:[]
      },
      {
          name: "Edwin",
          photo: "assets/img/profile4.jpg",
          historyRoutes:[
            {title: "Desde Casa a Parque", type:"Cicla"},
            {title: "Desde Casa a Centro comercial", type:"Caminar"},
            {title: "Desde Trabajo a Casa", type:"Cicla"}
          ],
          searchedRoutes:[]
      },
    ];
}
