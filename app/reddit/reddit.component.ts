/**
 * Created by LeonL64 on 4/29/2016.
 */

import {Component} from "angular2/core";
@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input name="title">
            </div>

            <div class="field">
                <label for="link">Link:</label>
                <input name="link">
            </div>
        </form>
    `
})
export class RedditComponent {
    constructor() {

    }
}