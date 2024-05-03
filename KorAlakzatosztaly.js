class KorAlakzatosztaly{


    #sugar;


    constructor(sugar){
        this.#sugar = sugar
    }


    terulet(){
        return (parseInt(this.#sugar)* parseInt(this.#sugar))* Math.PI;
    }

    kerulet(){
        return parseInt(this.#sugar) * 2 * Math.PI;
    }
}