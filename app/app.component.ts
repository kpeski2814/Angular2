// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla y 
//que plantilla va a usar
@Component({
    selector: 'my-app',
    template: `<h1>{{titulo}}</h1>
    				<ul>
					<li>Titulo:<strong>{{pelicula}}</strong></li>
					<li>Director:<strong>{{director}}</strong></li>
					<li>Año:<strong>{{anio}}</strong></li>
				</ul>`

})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando variables publicas
	public titulo:string="Hola Mundo";
	public pelicula:string="Batman y Robin";
	public director:string="Zack Snider";
	public anio:number=2016;
	
}

