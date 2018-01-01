import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    user_name: String;
    password: String;
    constructor(private _router: Router) { }
    onLogin(value: any): void {
        console.log(value);
        if (value.user_name == "11" && value.password == "11") {
            this._router.navigateByUrl('/restaurants');
        } else {
            alert("Invalid Login Details ,use\nUserName : user Password: user123");
        }
    }
}
