//diferencias entre variables 

//var es una variable que se puede reasignar, variablers de tipo global
var nombre = "Juan";
var nombre = "Pedro";
var nombre = "Luis"; //se puede volver a declarar una variable con var
console.log(nombre); 
//imprime Pedro, esto es porque var permite reasignar valores a una variable ya declarada 

//let, es una variable que se puede reasignar pero la diferencia con vara es que no se puede volver a declarar
//variables de scope local
let name ="magneto"; //scope global 
//let name ="wolverine"; //error, no se puede volver a declarar una variable con let

if(true){
    let name ="wolverine"; 
    console.log(name);
    //scope local 
    
} 
console.log(name);
//imprime magneto, esto es porque let permite reasignar valores a una variable ya declarada 

//const, su valor nunca va a cambiar, variables de scope local
const nameTwo ="flash"; //scope global

if(true){
    const nameTwo ="superman";
    console.log(nameTwo);
    //scope local 
}
console.log(nameTwo);
//imprime flash, esto es porque const no permite reasignar valores a una variable ya declarada

//undefined, es un valor que se le asigna a una variable que no tiene valor es cuando  busco una variable antes de ser inicializada o declarada 
