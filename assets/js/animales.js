"use strict";
//import {Animal} from './animales.js';
class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get Nombre(){
        return this.#nombre;
    }

    get Edad(){
        return this.#edad;
    }

    get Img(){
        return this.#img;
    }

    get Sonido(){
        return this.#sonido;
    }

    set Comentarios(nuevoComentario){
        this.#comentarios = nuevoComentario;
    }
    get Comentarios(){
        return this.#comentarios;
    }
}