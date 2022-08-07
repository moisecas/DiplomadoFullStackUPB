//uso de condicionales

let passwordBD = "123456";
let passwordUsuario = prompt("Ingrese su contraseña");

let resultado = passwordBD === passwordUsuario;

if(resultado === true){
    alert("Contraseña correcta");
}else{
    alert("Contraseña incorrecta");
}

//switch
let edad = prompt("Ingrese su edad");
switch(edad){
    case "1":
        alert("Eres un niño");
        break;
    case "2":
        alert("Eres un niño");
        break;
    case "3":
        alert("Eres un niño");
        break;
    case "18":
        alert("Eres un adulto");
        break;
    case "19":
        alert("Eres un adulto");
        break
    default:
        alert("Eres un adulto");

        
}

//while
let contador = 0;
while(contador < 10){ //debe tener condicion para que no se ejecute infinitamente
    console.log("Hola");
    contador++;
}
//array de nombres
let nombres = ["Juan", "Pedro", "Maria", "Juan", "Pedro", "Maria"];
for(let i=0; i<nombres.length; i++){ //mientras i sea menor que el largo del array
    console.log(nombres[i]);
}

//metodos para modificar un array
nombres.push("Juan"); //agrega un elemento al final del array
nombres.pop(); //elimina el ultimo elemento del array
nombres.unshift("Juan"); //agrega un elemento al inicio del array
nombres.shift(); //elimina el primer elemento del array
nombres.splice(1,1); //elimina un elemento del array en la posicion 1 y 1 elemento

//modificar un array nombres
for(let i=0; i<nombres.length; i++){
    nombres[i] = "Juan";
} //cambia todos los elementos del array a "Juan" 

//funciones
function saludar(){
    alert("Hola");
    //escribir div con el texto "Hola"
    let div = document.createElement("div");
    div.innerHTML = "Hola";
}
saludar();