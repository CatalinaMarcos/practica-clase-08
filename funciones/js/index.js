// ejercicio 1

let alturaRectangulo = 10;
let anchoRectangulo = 20;

function rectangulo (alturaRectangulo, anchoRectangulo) {
    let areaRectangulo = alturaRectangulo * anchoRectangulo ;
    return areaRectangulo ;
}

let areaRectangulo = rectangulo(alturaRectangulo, anchoRectangulo)
console.log(areaRectangulo);


// ejercicio 2

let baseTriangulo = 10
let alturaTriangulo = 14

function triangulo (baseTriangulo, alturaTriangulo) {
    let areaTriangulo = baseTriangulo * alturaTriangulo / 2 ;
    return areaTriangulo ;
}

let areaTriangulo = triangulo(baseTriangulo, alturaTriangulo)
console.log(areaTriangulo);


// ejercicio 3

let array = ["casa", "edificio", "hotel"]

function largoDelArray (array){
    return array.length ;
}

console.log(largoDelArray(array));


// ejercicio 4

let palabra = "Catalina"

function cantidadDeLetras(frase) {
    return frase.length ;
}

console.log(cantidadDeLetras(palabra));


// ejercicio 5

function dolarHoy (numeroEnPesos) {
    return `la cantidad de dolares es ${numeroEnPesos / 1000}` ;
}

console.log(dolarHoy(10000));


// ejercicio 6

function precioFinal (precio) {
    return `la cantidad de pesos más el IVA es ${precio * 1.21}` ;
}

console.log(precioFinal(100));


//ejercicio 7

function mitad (mitadDeNumero) {
    return mitadDeNumero / 2 ;
}

console.log(mitad(8));


//ejercicio 8 desafío extra

function diaSegunNumero (array, numero) {
    if (numero <0 || numero >7) {
        return "numero de dia invalido"
    }
    return array [numero]
}

let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let numeroDia = 5
let diaCorrespondiente = diaSegunNumero(diaSemana , numeroDia)

console.log("el dia que corresponde al número " + numeroDia, "es: " + diaCorrespondiente);


// ejercicio 9 desafío hiper plus ultra (opcional)

function suma (num1, num2) {
    return num1 + num2 ;
}

function resta (num1, num2) {
    return num1 - num2 ;
}

function multiplicacion (num1 , num2) {
    return num1 * num2 ;
}

function division (num1 , num2) {
    if (num2 !== 0) {
        return num1 / num2 ;
    }
    else {
        return "Error, no se puede dividir por 0"
    }
}

function calculadora(num1, num2, operacion) {
    if (operacion === "suma") {
        return suma(num1, num2);
    } else if (operacion === "resta") {
        return resta(num1, num2);
    } else if (operacion === "multiplicacion") {
        return multiplicacion(num1, num2);
    } else if (operacion === "division") {
        return division(num1, num2);
    } else {
        return "Operación no válida";
    }
}

console.log(calculadora(10,50,"suma"));
console.log(calculadora(150,50,"resta"));
console.log(calculadora(6,5,"multiplicacion"));
console.log(calculadora(2,0,"division"));


// ejecutando funciones

function siguiente(numero) {
    return numero + 1;
  }
  
function doble(numero) {
    return 2 * numero;
  }
  
function siguienteDelDoble(numero) {
    return siguiente(doble(numero));
  }

console.log(siguiente(3));
console.log(doble(20));
console.log(siguienteDelDoble(7));

function anterior (num) {
    return num - 1;
}

function triple (num) {
    return num * 3;
}

function anteriorDelTriple (num) {
    return anterior(triple(num))
}

console.log(triple(100));
console.log(anterior(9));
console.log(anteriorDelTriple(100));
