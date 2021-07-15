import { Animal } from "./animales.js";

export class Aguila extends Animal {
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