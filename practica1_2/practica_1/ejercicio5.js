// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
// falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
// de estudiantes están presentes cuando la clase empieza.
// Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
// que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
// profesor de la clase, determinar si la clase se cancela o no.
// Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
// CANCELA.

const studentsClass = [2,0,3,1,-4,-2,3,-1,-5,7];

const cantidadNecesaria = 4;

function llegoTemprano(studentsClass){

    const cantidadLlego = studentsClass.filter(student => student <= 0).length;
    
    return cantidadLlego;
};

console.log(`LLEGARON ${llegoTemprano(studentsClass)} A TIEMPO!`);

if(llegoTemprano(studentsClass) >= cantidadNecesaria){
    console.log("NO (NO SE CANCELA)");
}else {
    console.log("YES (SI SE CANCELA)");
};