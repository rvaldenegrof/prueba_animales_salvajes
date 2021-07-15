import { Animal } from "./animales.js";

export class Oso extends Animal{
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