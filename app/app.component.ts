import {Component} from 'angular2/core';
import {MaterialComponent} from "./material/material-component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MaterialComponent]
})
export class AppComponent { }