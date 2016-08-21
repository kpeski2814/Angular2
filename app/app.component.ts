import {Component} from 'angular2/core';

import {PeliculasListComponent } from "./components/peliculas-list.components";

@Component({
    selector: 'my-app',
    directives:[PeliculasListComponent],
    templateUrl: "app/view/peliculas.html",
    styleUrls:["../assets/css/styles.css"]
})
 
export class AppComponent { 

	public titulo:string="Peliculas con Angular2";
	
}





