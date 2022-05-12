//importar modulos

const frutero = require ('./frutas.js');
const fs = require('fs');
const ruta=("./txt") 
const colors = require('colors');

console.log(frutero)

function suma(x1, x2) {
    return x1 + x2;

}
function multiplicacion (x1, x2) {
    return x1 * x2;

}
function resta (x1, x2) {
    return x1 - x2;
}

console.log(suma(2, 3));
console.log(multiplicacion(2, 3));
console.log(resta(2, 3));

console.log('Hola mundo');

fs.access(ruta,fs.constants.F_OK,(err)=>{
    if(err){
        console.log("no fue posible acceder", err.green); //si no existe el archivo
    }
    else{
        fs.readFile(ruta,"utf-8",(err,files)=>{
            if(err){
                console.log("no fue posible leer", err.green);
            }
        })
        
    }
})
