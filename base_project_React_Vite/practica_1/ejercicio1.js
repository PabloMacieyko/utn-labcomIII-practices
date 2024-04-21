//1. Crear un arreglo de nombres a partir del siguiente input:
let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

//.map() crea un nuevo arreglo al aplicar una función a cada elemento del arreglo original, devolviendo los resultados en el nuevo arreglo.
const names = input.map((person) => {
    return person.name;
})
