import { Animal } from "./animales.js";

export class Lobo extends Animal{
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
