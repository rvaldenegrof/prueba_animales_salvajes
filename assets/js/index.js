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

class Leon extends Animal{
    constructor(...args){
        super(...args);
    }

    Rugir(){
        console.log("RUUUUUGIR");
    }
}

class Lobo extends Animal{
    constructor(){
        super();
    }

    Aullar(){
        console.log("AUUUU AU AU");
    }
}

class Oso extends Animal{
    constructor(...args){
        super(...args);
    }

    Grunir(){
        console.log("RAWWWW RAWWW");
    }
}

class Serpiente extends Animal{
    constructor(...args){
        super(...args);
    }

    Sisear(){
        console.log("PSIIII PS PS");
    }
}

class Aguila extends Animal {
    constructor(...args){
        super(...args);
    }

    Chillar(){
        console.log("IGGG IGG");
    }
}

(async function(){

    const animalElement = document.getElementById("animal");
    const edadElement = document.getElementById("edad");
    const comentariosElement = document.getElementById("comentarios");
    const previewElement = document.getElementById("preview");
    const btnRegistrarElement = document.getElementById("btnRegistrar");

    let Animales = [];
    //let Animales;
    try {
        const Request = await fetch("/animales.json");
        const ParsedRequest= await Request.json();

        Animales = ParsedRequest.animales;
        //console.log(Animales);
    } catch (e) { 
        console.error(e);
        Animales = [];
    }




    animalElement.addEventListener('change', () => {
        const animalElejido = animalElement.value;
        console.log(animalElejido);

        const animalEncontrado = Animales.find(animal => animal.name === animalElejido);
        console.log(animalEncontrado);

        previewElement.setAttribute("src", `assets/imgs/${animalEncontrado.imagen}`);
    });

    btnRegistrarElement.addEventListener('click', () => {
        let nombre = animalElement.value;
        let edad = edadElement.value;
        let comentarios = comentariosElement.value;

        console.log({nombre, edad, comentarios});
    });

})();


















