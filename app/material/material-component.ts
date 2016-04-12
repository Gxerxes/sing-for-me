/**
 * Created by LeonL64 on 4/12/2016.
 */
import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

@Component({
    selector: 'my-material',
    templateUrl: 'app/material/material.component.html',
    directives: [MATERIAL_DIRECTIVES],
    providers: [MATERIAL_PROVIDERS]
})
export class MaterialComponent {

}