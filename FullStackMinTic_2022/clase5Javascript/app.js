document.write("<h1>Hola mundo</h1>");

const a = 10;



//escribir del 1 al 10 
for(let i = 1; i <= 10; i++){
    document.write(i + "<br>");
    console.log(i); //imprime el valor de i
}

const num1=document.getElementById("num1");
const num2=document.getElementById("num2");

function suma(){
    const resultado=parseInt(num1.value)+parseInt(num2.value);
    
    document.getElementById("resultado").innerHTML=("El resultado es: "+resultado);
}

//escribir en un document.write() los tipos de datos de javascript
document.write("<h1>Tipos de datos</h1>");
document.write("<p>Number: "+typeof(10)+"</p>");
document.write("<p>String: "+typeof("Hola")+"</p>");
document.write("<p>Boolean: "+typeof(true)+"</p>");
document.write("<p>Undefined: "+typeof(undefined)+"</p>");
document.write("<p>Null: "+typeof(null)+"</p>");
document.write("<p>Object: "+typeof({})+"</p>");
document.write("<p>Array: "+typeof([])+"</p>");
document.write("<p>Function: "+typeof(function(){})+"</p>");
document.write("<p>Date: "+typeof(new Date())+"</p>");
document.write("<p>RegExp: "+typeof(/[0-9]/)+"</p>");
document.write("<p>Error: "+typeof(new Error())+"</p>");
document.write("<p>Map: "+typeof(new Map())+"</p>");
document.write("<p>Set: "+typeof(new Set())+"</p>");
document.write("<p>WeakMap: "+typeof(new WeakMap())+"</p>");
document.write("<p>WeakSet: "+typeof(new WeakSet())+"</p>");
document.write("<p>Symbol: "+typeof(Symbol())+"</p>");
document.write("<p>Promise: "+typeof(Promise.resolve())+"</p>");
document.write("<p>Generator: "+typeof(function*(){})+"</p>");
document.write("<p>GeneratorFunction: "+typeof(function*(){}())+"</p>");
document.write("<p>GeneratorIterator: "+typeof(function*(){}().next())+"</p>");
document.write("<p>Iterator: "+typeof(function*(){}().next().value)+"</p>");
document.write("<p>GeneratorIterator: "+typeof(function*(){}().next().value)+"</p>");

//arrays
document.write("<h1>Arrays</h1>");
const array=[1,2,3,4,5,6,7,8,9,10];
document.write("<p>Array: "+array+"</p>"); 
document.write("<p>Array length: "+array.length+"</p>");
document.write("<p>Array index 0: "+array[0]+"</p>");
document.write("<p>Array index 1: "+array[1]+"</p>");
document.write("<p>Array index 2: "+array[2]+"</p>");

//objetos
document.write("<h1>Objetos</h1>");
const objeto={
    nombre:"Juan",
    apellido:"Perez",
    edad:30,
    direccion:{
        calle:"Calle falsa",
        numero:123

    }
}
document.write("<p>Objeto: "+objeto+"</p>"); 
document.write("<p>Objeto nombre: "+objeto.nombre+"</p>");
document.write("<p>Objeto apellido: "+objeto.apellido+"</p>");
document.write("<p>Objeto edad: "+objeto.edad+"</p>");
document.write("<p>Objeto direccion calle: "+objeto.direccion.calle+"</p>");
document.write("<p>Objeto direccion numero: "+objeto.direccion.numero+"</p>"); 



