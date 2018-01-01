import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';


import { AppComponent } from "./app.component";
import { SharedModule } from "./shared-folder/shared-folder.module";
import { LoginComponent } from "./login/login.component";
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantFilterPipe } from './restaurant/restaurant-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestaurantComponent,
    RestaurantFilterPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLxCfDzVzJ9PKqZnsM10M3MhE2C-S9V9k',
      libraries: ["places"]
    }),
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "restaurants", component: RestaurantComponent },
      { path: "", component: LoginComponent },
      { path: "**", redirectTo: "/", pathMatch: "full" }
    ])
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent],
})
export class AppModule { }
