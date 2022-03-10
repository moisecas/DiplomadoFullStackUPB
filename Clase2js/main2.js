var numero

numero = prompt("introduce un numero") //para pedir datos por navegador
numero=numeroConver = Number(numero) //hay que convertirlo usando Number 

//revisando operadores lógicos 
var boolean1 = true
var boolean2= true
var boolean3=false
let boleanS=(boolean1||boolean2||boolean3)? "es mayor de edad": "es menor de edad" //da es mayor de edad
let boleanSs=(boolean1&&boolean2&&boolean3)? "es mayor de edad": "es menor de edad" //da es menor de edad


//el famoso switch, para ahorrar condicionales
let mayoriaEdad = (numero>18)? "es mayor de edad": "debes crecer mas" //operador terniario, usamos ? en caso de verdadero da un mensaje
                                    //valor true : valor false
switch(numero){

    case 1:
    console.log("hacer")
    break;

    case 2:
    console.log("caso 2")
    break

}

