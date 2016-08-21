System.register(['angular2/core', "./model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla y 
            //que plantilla va a usar
            AppComponent = (function () {
                function AppComponent() {
                    //Creando variables publicas
                    this.titulo = "Peliculas con Angular2";
                    this.mostrarDatos = false;
                    this.pelicula = new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                        new pelicula_1.Pelicula(2, "El inprinsindible", "Datto Huyaser", 2011),
                        new pelicula_1.Pelicula(3, "La madre", "Abigail Breslin", 2012),
                        new pelicula_1.Pelicula(4, "Batman Ataca", "Veron Mick", 2000),
                        new pelicula_1.Pelicula(5, "the girls", "Bruno Alnordo", 2001)
                    ];
                    this.debug();
                }
                AppComponent.prototype.debug = function () {
                    console.log(this.pelicula);
                };
                AppComponent.prototype.onShowHide = function () {
                    this.mostrarDatos = true;
                };
                AppComponent.prototype.onHideShow = function (value) {
                    this.mostrarDatos = value;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/view/peliculas.html",
                        styleUrls: ["../assets/css/styles.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map