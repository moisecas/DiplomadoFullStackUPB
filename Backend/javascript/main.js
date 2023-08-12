//alertas
//alert(  "hola mundo") 

//variables
var nombre = "juan";
let apellido = "perez";
nombre = "pedro";
apellido = "gomez";

//constantes
const PI = 3.1416;
//PI = 3.16;  //error no se puede reasignar

//console.log
console.log(nombre); 
console.log(apellido);
console.log(PI); 

//mostrar datos en el html
let datos = document.querySelector("#data");
datos.innerHTML = `
    <h1>hola a tod@s</h1>
    <h2>mi nombre es ${nombre} ${apellido}</h2>
    <h3>el valor de PI es ${PI}</h3>
    `;  //se usa comillas invertidas para poder usar el ${} para mostrar variables en el html 


//condiciones  ejemplos 
if (true) {
    console.log("si esta verdad");
    } else if (!false){
        console.log('no estoy seguro');
        }else{
            console.log ("esto si lo entiendo pero no sabemos que hacer coneste dato"); 
            }; 







