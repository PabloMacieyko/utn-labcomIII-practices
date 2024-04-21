// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

let countries = [
    { name: "Brasil", population: 211000000 },
    { name: "Argentina", population: 45810000},
    { name: "Japon", population: 126000000 },
    { name: "Rusia", population: 144000000 },
    { name: "Mexico", population: 146000000 }
];

const countriesSort = countries.sort((a, b) => b.population - a.population);

console.log(countriesSort);