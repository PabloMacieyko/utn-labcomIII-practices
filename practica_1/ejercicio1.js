//1. Crear un arreglo de nombres a partir del siguiente input:
let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const names = input.map((person) => {
    return person.name;
})


// 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
// personas mayores de 20 años y menores de 29.


// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}


// 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
// torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
// velas más altas de la torta.
// Tu objetivo es contar cuántas son las más altas de la torta
// Ejemplo candles = [4, 4, 1, 3]
// Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
// debe retornar 2 como valor.
let candles = [4,4,1,3,2,1,2,1,1,1,4];

highestCandle = Math.max(...candles)
let highestCandlesAmount = 0

let candleCounter = candles.reduce((acc, candle) => {
    if (candle == highestCandle){
        highestCandlesAmount++
    }
},0)


console.log(highestCandlesAmount)

// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
// falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
// de estudiantes están presentes cuando la clase empieza.
// Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
// que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
// profesor de la clase, determinar si la clase se cancela o no.
// Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
// CANCELA.


// 6. Resolver por completo la ejercitación de flexbox que radica en esta página.


// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
// Ejemplos:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
// 12]]