// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla y 
//que plantilla va a usar
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html"
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando variables publicas
	public titulo:string;
	public pelicula:string;
	public director:string;
	public anio:number;
	
	constructor(){
		this.pelicula="Batman y Robin";
		this.director="Zack Snider";
		this.anio=2016;
		//this.holaMundo();
	}

	//holaMundo(){
		//alert("Pelicula" +this.pelicula+"  -  "+this.pelicula+"  -  "+this.anio);
	//}
}



