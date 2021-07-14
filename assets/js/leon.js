import { Animal } from "./animales.js";

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir(){
        return `RUGEEEEEE`;
    }
}