alert("Adivinanzas usando promesas"); 

let num =  prompt("Ingrese un numero entre 1 y 6: ")
let contador = 0;

function mostrarnumeros(num) {
    return new Promise(function(resolve, reject) {
        if(num >= 0) {
            let numero =  Math.floor(Math.random() * 6);   
            resolve(alert(numero)); //resolviendo la promesa
        if(num == numero) {
            
            let puntaje = 2 
            let acumulador = puntaje + contador++;
            alert("Felicidades, acertaste el numero y su puntaje es de: " + acumulador);
            resolve(alert("Los numeros son iguales")); //resolviendo la promesa
                while(numero == num) {
                    contador++;
                    alert("intentos acertados: " + contador);
                    let num =  prompt("Ingrese un numero entre 1 y 6: ")
                    mostrarnumeros(num); 
                }
            }else{
                reject(alert("Los numeros no son iguales")); //rechazando la promesa
                mostrarnumeros(); 
            }
        if (numero != num) {
            let num =  prompt("Ingrese un numero entre 1 y 6: ")
            mostrarnumeros(num); 
        }
        } 
         
        
    });
    
}


mostrarnumeros(num) 