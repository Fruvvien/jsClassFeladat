class Szemelyosztaly{
    #nev;
    #eletkor;
    #tulajdonsag;


    constructor(nev, eletkor, tulajdonsag){
        this.#nev = nev,
        this.#eletkor = eletkor,
        this.#tulajdonsag = tulajdonsag
    }

   
    
    userData(){
        return `Neve: ${this.#nev}\nÉletkor: ${this.#eletkor}\nTulajdonság: ${this.#tulajdonsag}`
    }



}