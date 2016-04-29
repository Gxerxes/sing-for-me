import {Component} from 'angular2/core';
import {MaterialComponent} from "./material/material-component";
import {RedditComponent} from "./reddit/reddit.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [RedditComponent]
})
export class AppComponent { }