class Konyvosztaly{
    #cim;
    #szerzo;
    #kiadasiEv;


    constructor(cim, szerzo, kkiadasiEv){
        this.#cim = cim,
        this.#szerzo = szerzo,
        this.#kiadasiEv = kkiadasiEv

    }

    bookData(){
        return `Cím: ${this.#cim}\Szerző: ${this.#szerzo}\Kiadási év: ${this.#kiadasiEv}`
    }
    

}