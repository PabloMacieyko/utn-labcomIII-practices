// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
// Ejemplos:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]


const objectValue = {
    firstName: "Pablo Ivan",
    lastName: "Macieyko",
    age: 30,
};

const toArray = (objectVar) => Object.entries(objectVar);
console.log(toArray(objectValue));