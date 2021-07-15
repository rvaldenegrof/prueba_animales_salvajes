import { Animal } from "./animales.js";

export class Leon extends Animal{
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