# RestaurantApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Table of Contents
1. Login
2. Restaurant locator

## Prerequisites for running the App

1. Install `Angular Cli` globally by running
 `npm install -g @angular/cli` .
2. Install `Nodejs` Make sure you have node version above 6.9 and npm above 3 .
3. Install Google chrome/Firefox extension `CORS` for allowing cross-origin-request .
## Development server

1. Clone the code into your machine and navigate to project directory in the terminal .
2. Run `npm install` to install all the angular dependencies .
3. Run `ng serve` for a dev server .
4. Navigate to `http://localhost:4200/`  in your browser .

## Login Credentials

    User Name : user
    Password : user123

## Functionality of the Application

  This application finds all the Restaurants and displays on the Google Map using markers and the Restaurants details in the left pane of the application as list.
  
  When the application is launched it asks for the permission for allowing user location and displays restaurants based on his location.
  
  User can also search for the location using search bar provided on top of Google Maps, and based on the user serached location the restaurants will be displayed.

  User can also filter the available restaurants form the left pane search box. Based on the filtered result only the filtered restaurants will be displayed on the Google Map.

  User can get a maximum of 20 search results around his 500 meters radius.


<b>[ Note ] : If you do not get the restaurants list, please check `CORS` enabled on your browser or try reinstalling it.</b>
