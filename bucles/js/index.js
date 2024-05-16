// 1) PRECALENTANDO

//a
for (let i=0; i<5; i++ ) {
    console.log("Practicando con el bucle for");
}

//b
for (let i=0; i<10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}

//c
//i
for (let i=2; i<=20; i+=2) {
    console.log(i);
}
//ii
for (let i=5; i<=250; i+=5) {
    console.log(i);
}

//d
for (let i=100; i>=0; i--) {
    console.log(i);
}


// 2) TABLAS DE MULTIPLICAR

//a
let base = 2
let resultados = []

//b y c
for (let i=0; i<10; i++) {
    resultados.push(base * i);
}

//d
console.log(resultados);


// 3) OBTENIENDO EL TOTAL

//a y b
let ganancias = [-50, -40, -30, -20, -10, 10, 20, 30, 40, 80]

//c
let sumaTotal = 0;

for (let i=0; i<10; i++) {
    sumaTotal += ganancias[i];
}

console.log("El total de ganancias es:", sumaTotal);



// 4) RECORRIENDO ARRAYS

//a y b
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]

for (let i=0; i<healingIsDifficult.length; i++) {
    console.log((i+1)+" "+healingIsDifficult[i]);
}


// 5) RECORRIENDO ARRAYS DE OBJETOS LITERALES

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

//a y b

for (let i=0; i<got.length; i++) {
    let persona = got[i];
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    if (persona.ciudad) {
        console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`);
    }
}

