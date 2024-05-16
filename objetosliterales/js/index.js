// ejercicio 1 y 2

let misDatos = {
    nombre : "Catalina",
    apellido : "Marcos",
    dni : "47131464",
    comidasFavoritas : ["Sushi", "Picada", "Empanadas"],
    edad : 18, 
    saludar : function () {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]} `
    }
}

console.log(misDatos.saludar());


// ejercicio 3

let auto = {
    marca: "Toyota",
    modelo: "Etios",
    anio: 2022,
    color: "gris oscuro",
    posicion: 0,
    avanzar : function(n) {
        if (n>0) {
            this.posicion += n;
        }
    },
    retroceder : function(n) {
        if (n>0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(4);
auto.avanzar(6);
auto.retroceder(1);

console.log(auto.posicion);


// ejercicio 4

let nuevoAuto = {
    marca: "Toyota",
    modelo: "Etios",
    anio: 2022,
    color: "gris oscuro",
    posicion: 0,
    moverse : function(n) {
        if (n>0) {
            this.posicion += n;
        } 
        else if (n<0) {
            this.posicion -= -n;
        }
    },
};

nuevoAuto.moverse(20);
nuevoAuto.moverse(-8);

console.log(nuevoAuto.posicion);


// ejercicio 5

//ironman
let ironMan = {
    nombre : "Iron Man",
    equipo : "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
    energia : 100, 
    getPoder : function (num) {
        this.energia -= 10;
        return `Poder elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`
    }
}

//hulk
let hulk = {
    nombre : "Hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100, 
    getPoder : function (num) {
        this.energia -= 10;
        return `Poder elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`
    }
}

//batalla
console.log(ironMan.getPoder(2));
console.log(hulk.getPoder(1));
console.log(ironMan.getPoder(0));
console.log(hulk.getPoder(2));