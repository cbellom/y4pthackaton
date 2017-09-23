
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class RestApiService {

  constructor(private http: Http) {
  }

  doGet(url : string) {
    return new Promise((resolve, reject) => {

      this.http.get(url)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
      });
  }

}
