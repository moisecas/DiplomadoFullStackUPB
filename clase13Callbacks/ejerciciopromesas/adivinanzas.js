alert("Adivinanzas usando promesas"); 

let num =  prompt("Ingrese un numero: ")


function mostrarnumeros(num) {
    return new Promise(function(resolve, reject) {
        if(num > 0) {
            let numero =  Math.floor(Math.random() * 6);   
            resolve(alert(numero)); //resolviendo la promesa
        if(num == numero) {
                resolve(alert("Los numeros son iguales")); //resolviendo la promesa
            }
        } else {
            reject(alert("el numero es negativo: " + num));//rechazando la promesa  
        }
        alert("Numero ingresado: " + num); 
    });
}
mostrarnumeros(num) 