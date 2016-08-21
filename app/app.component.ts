// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from "./model/pelicula";

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla y 
//que plantilla va a usar
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html",
    styleUrls:["../assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando variables publicas
	public titulo:string="Peliculas con Angular2";
	public pelicula:Pelicula;
	public mostrarDatos:boolean;
	public peliculas:Array<string>;
		
	constructor(){
		this.mostrarDatos=false;
		this.pelicula= new Pelicula(1, "Batman vs Superman", "Zack Snider" , 2016);

		this.peliculas=[
					new Pelicula(1, "Batman vs Superman", "Zack Snider" , 2016);
					new Pelicula(2, "El inprinsindible", "Datto Huyaser" , );
					new Pelicula(3, "La madre", "Abigail Breslin" , 2012);
					new Pelicula(4, "Batman Ataca", "Veron Mick" , 2000);
					new Pelicula(5, "the girls", "Bruno Alnordo" , );

							];



		this.debug();

	}

	debug(){
		console.log(this.pelicula);
	}
	onShowHide(){
			this.mostrarDatos=true;
	}

	onHideShow(value){
		this.mostrarDatos=value;
	}





