//Escriba un programa que ingrese un número entero positivo de tres dígitos y lo emita a la inversa al emitir. Tales como: 123, 321

function invertirNumero(numero){
    return Number(numero.toString().split("").reverse().join(""))
}
let valor 
valor = prompt("digite un numero"); 
//console.log(valor);
alert(invertirNumero(valor));  