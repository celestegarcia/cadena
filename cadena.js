"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
//PALINDROMO
    Object.defineProperty(Cadena.prototype, "palindromo", {
        get: function () {
            var reversa = this.cadena.split("").reverse().join("").toLowerCase();
            reversa = reversa.replace(/\s/g, "");
            if (reversa == this.cadena.replace(/\s/g, "").toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
//CONTAR VOCALES
Object.defineProperty(Cadena.prototype, "contadorVocales", {
        //CONTAR VOCALES
        get: function () {
            //declarar contador
            var contador = 0;
            var arregloVocales = this.cadena.split("");
            //declara letra y recorre todo el arreglo
            //toLowerCase para mayusculas
            for (var _i = 0, arregloVocales_1 = arregloVocales; _i < arregloVocales_1.length; _i++) {
                var letra = arregloVocales_1[_i];
                if (letra.toLowerCase() == "a" || letra.toLowerCase() == "e" ||
                    letra.toLowerCase() == "i" || letra.toLowerCase() == "o" || letra.toLowerCase() == "u")
                    contador++;
            }
            return contador;
        },
        enumerable: true,
        configurable: true
    });

//CONTAR CONSONANTES
    Object.defineProperty(Cadena.prototype, "contadorConsonantes",{
get: function(){
var contador2 = 0
var consonantes=["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t",
"v","w","x","y","z"];
var arregloCon = this.cadena.split("");
for (var con1 in arregloCon){
        for (var con2 in consonantes)
        if (arregloCon [con1] == consonantes [con2]){
            contador2++; 
        }
    }
    return (contador2);
},
 enumerable: true,
        configurable: true
});

//CONTAR LETRAS
    Object.defineProperty(Cadena.prototype, "contarLetras", {
        get: function () {
            var total = 0;
            var letras = this.cadena.split("");
            for (var _i = 0, letras_2 = letras; _i < letras_2.length; _i++) {
                var letra = letras_2[_i];
                if (/[a-z]/.test(letra.toLocaleLowerCase()))
                    total++;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
//CONTADOR PALABRAS
    Object.defineProperty(Cadena.prototype, "contarPalabra", {
        //CONTADOR PALABRAS
        get: function () {
            return this.cadena.split(" ").length;
        },
        enumerable: true,
        configurable: true
    });

//FUNCION TEXT
    Object.defineProperty(Cadena.prototype, "text", {
        get: function () {
            return this.cadena;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());

//var cadena = new Cadena("Anita lava la tina");
var cadena = new Cadena("Eva usaba rimel y le miraba suave");
console.log("-------------------Probando la clase cadena ----------------------------");
console.log("La frase: ", cadena.text);
console.log("Es palindromo: ", cadena.palindromo);
console.log("Total de vocales: ", cadena.contadorVocales);
console.log("Total de letras: ", cadena.contarLetras);
console.log("Total de Palabras: ", cadena.contarPalabra);
console.log("Total de consonantes: ", cadena.contadorConsonantes);
