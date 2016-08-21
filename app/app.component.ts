// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla y 
//que plantilla va a usar
@Component({
    selector: 'my-app',
    templateUrl: "<h1>Hola mundo desde Angular</h1>"

})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	
}