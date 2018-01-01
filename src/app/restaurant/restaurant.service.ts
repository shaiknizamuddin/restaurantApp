import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/operator/delay";
import "rxjs/operator/mergeMap";
import "rxjs/operator/switchMap";
@Injectable()
export class RestaurantService {
  constructor(private http: Http) {}

  getRestaurantsApi(lat, lng) {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          lat +
          "," +
          lng +
          "&radius=500&types=restaurant&key=AIzaSyBLxCfDzVzJ9PKqZnsM10M3MhE2C-S9V9k",
        { headers: headers }
      )
      .map(res => res.json())
      .catch(this.handleError);
  }

  public handleError(error: Response) {
    return Observable.throw(error.json().error || "Server error");
  }
}
