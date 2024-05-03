class Bankfiok{

    #nev;
    #cim;
    #egyenleg = 0;


    constructor(nev, cim){

        this.#nev = nev,
        this.#cim = cim
        
    }


    egyenlegBefizeteset(szam){
       return this.#egyenleg += szam;
    }

    egyenlegKivetele(){
      return  this.#egyenleg - this.#egyenleg
    }

    aktualisEgyenleg(){
        return `Nev ${this.#nev}\nCim ${this.#cim}\nEgyenleg ${this.#egyenleg}`;
    }
}