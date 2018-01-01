import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import {} from "@types/googlemaps";
import { FormControl } from "@angular/forms";
import { RestaurantService } from "./restaurant.service";

@Component({
  moduleId: module.id,
  templateUrl: "restaurant.component.html",
  styleUrls: ["restaurant.component.css"]
})
export class RestaurantComponent implements OnInit {
  public google;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public formatted_address: string;
  public noresluts: string;
  public restaurant_list: any[];
  public markers: any[] = [];
  public restaurantname;
  public rating;
  public restaurant_count;
  public restaurantsFound: boolean;
  public title: string;
  @ViewChild("search") public searchElementRef: ElementRef;
  public res;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public restaurantservice: RestaurantService
  ) {}

  ngOnInit() {
    this.title = "Nearby Restaurants";
    //  set google maps defaults Bangalore is a Current Location
    this.zoom = 15;
    this.latitude = 14.4425987;
    this.longitude = 79.98645599999998;
    // api call for restaurants
    this.getRestaurantsApi(this.latitude, this.longitude);
    // create search FormControl
    this.searchControl = new FormControl();
    //  set current position
    this.setCurrentPosition();
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: []
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //  get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //  verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //  set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.formatted_address = place.formatted_address;
          this.getRestaurantsApi(this.latitude, this.longitude);
        });
      });
    });
  }
  // set current location
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // call service after fetching current location
        this.getRestaurantsApi(this.latitude, this.longitude);
      });
    }
  }

  //  call service
  public getRestaurantsApi(lat, lng) {
    this.restaurantservice.getRestaurantsApi(lat, lng).subscribe(data => {
      this.res = data;
      if (this.res.results.length > 0) {
        this.restaurantsFound = true;
      } else {
        this.restaurantsFound = false;
      }

      this.restaurant_list = this.res.results;
      if (this.res.results) {
        this.markers = [];
        for (var i = 0; i < this.res.results.length; i++) {
          var newMarker = {};
          this.restaurantsFound = true;
          this.restaurant_count = this.res.results.length;
          newMarker = {
            latitude: this.res.results[i].geometry.location.lat,
            longitude: this.res.results[i].geometry.location.lng,
            label: this.res.results[i].name,
            name: this.res.results[i].name,
            address: this.res.results[i].vicinity,
            rating: this.res.results[i].rating
          };
          this.markers.push(newMarker);
        }
      }
    }),
      error => {
        console.log(error);
      },
      () => console.log("Google Place API called.");
  }
}
