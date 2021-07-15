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

    Rugir(player){
        console.log("RUUUUUGIR");
        player.src = `/assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

class Lobo extends Animal{
    constructor(...args){
        super(...args);
    }

    Aullar(){
        console.log("AUUUU AU AU");
        player.src = `/assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

class Oso extends Animal{
    constructor(...args){
        super(...args);
    }

    Grunir(){
        console.log("RAWWWW RAWWW");
        player.src = `/assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

class Serpiente extends Animal{
    constructor(...args){
        super(...args);
    }

    Sisear(){
        console.log("PSIIII PS PS");
        player.src = `/assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

class Aguila extends Animal {
    constructor(...args){
        super(...args);
    }

    Chillar(){
        console.log("IGGG IGG");
        player.src = `/assets/sounds/${this.Sonido}`;
        player.load();
        player.play();
    }
}

(async function(){

    const animalElement = document.getElementById("animal");
    const edadElement = document.getElementById("edad");
    const comentariosElement = document.getElementById("comentarios");
    const previewElement = document.getElementById("preview");
    const btnRegistrarElement = document.getElementById("btnRegistrar");
    const playerElemnent = document.getElementById("player");

    const TarjetasDeAnimales = [];
    let Animales;
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

    function actualizarVista(){
        const zonaDeTarjetasElement = document.getElementById("zona-de-tarjetas");
        
        zonaDeTarjetasElement.innerHTML = "";

        TarjetasDeAnimales.forEach((animal) => {
            const divCard = document.createElement("div");
            const divFoto = document.createElement("div");
            const divBtn = document.createElement("div");

            divCard.classList.add("card", "text-white", "bg-secondary");
            divCard.style.width = "200px";

            divFoto.innerHTML =  `<img class="card-img-top" src="/assets/imgs/${animal.Img}"  />`;
            
            divBtn.classList.add("card-body", "p-0");
            divBtn.innerHTML = `
            <a href="#" class="btn btn-primary">
                <img class="p-1" src="/assets/imgs/audio.svg" height="30rem" />
            </a>`;

            divFoto.addEventListener("click", () => {
                $("#modal").modal("show");
                console.log(animal);
                const modalBody = document.getElementById("modal-body");
                modalBody.innerHTML = `
                  <img src="./assets/imgs/${animal.Img}" style="width: 500px" class="img-fluid"/>
                  <p>${animal.Edad}</p>
                  <p>${animal.Comentarios}</p>
                `;
              });

            divBtn.addEventListener("click", () => {
                //console.log(animal);
                if(animal.Nombre === "Leon"){
                    //console.log(animal.Rugir());
                    animal.Rugir(playerElemnent);
                } else if(animal.Nombre === "Lobo"){
                    animal.Aullar(playerElemnent);
                } else if(animal.Nombre === "Oso"){
                    animal.Grunir(playerElemnent);
                } else if(animal.Nombre === "Serpiente"){
                    animal.Sisear(playerElemnent);
                } else if(animal.Nombre === "Aguila"){
                    animal.Chillar(playerElemnent);
                } else { 
                    console.log("Animal no existe");
                }
            });

            divCard.appendChild(divFoto);
            divCard.appendChild(divBtn);

            zonaDeTarjetasElement.appendChild(divCard);
        });
    }

    animalElement.addEventListener('change', () => {
        const animalElejido = animalElement.value;
        //console.log(animalElejido);

        const animalEncontrado = Animales.find(animal => animal.name === animalElejido);
        //console.log(animalEncontrado);

        previewElement.setAttribute("src", `/assets/imgs/${animalEncontrado.imagen}`);
    });

    btnRegistrarElement.addEventListener('click', () => {
        let nombre = animalElement.value;
        let edad = edadElement.value;
        let comentarios = comentariosElement.value;

        const {imagen, sonido} = Animales.find((animal) => animal.name === nombre);

        switch (nombre) {
            case "Leon":{
                const leon = new Leon(nombre, edad, imagen, comentarios, sonido);
                TarjetasDeAnimales.push(leon);
            }
            break;
            case "Lobo":{
                const lobo = new Lobo(nombre, edad, imagen, comentarios, sonido);
                TarjetasDeAnimales.push(lobo);
            }
            break;
            case "Oso":{
                const oso = new Oso(nombre, edad, imagen, comentarios, sonido);
                TarjetasDeAnimales.push(oso);
            }
            break;
            case "Aguila":{
                const aguila = new Aguila(nombre, edad, imagen, comentarios, sonido);
                TarjetasDeAnimales.push(aguila);
            }
            break;
            case "Serpiente":{
                const serpiente = new Serpiente(nombre, edad, imagen, comentarios, sonido);
                TarjetasDeAnimales.push(serpiente);
            }
            break;

        default:
            break;
        }
        //console.log({nombre, edad, comentarios});
        console.log(TarjetasDeAnimales);

        actualizarVista();
    });

})();


















