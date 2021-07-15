import { Animal } from "./animales.js";

export class Serpiente extends Animal{
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