class HomersekletKonverterOsztaly{


    #celsius;
    #fahrenheit;

    constructor(celsius, fahrenheit){
        this.#celsius = celsius,
        this.#fahrenheit = fahrenheit
    }

    celsiusToFahrenheit(){
        return parseInt(this.#celsius)  * 1.8 + 32;
    }


    fahrenheitToCelsius(){
        return (parseInt(this.#fahrenheit) - 32) / 1.8;
    }
}