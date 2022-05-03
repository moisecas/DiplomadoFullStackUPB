// function imprimir(callback){ //callback es una funcion que se le pasa como parametro 
//     console.log('Hola');
//     callback();//llamamos a la funcion que se le pasa como parametro
// }//dentro de imprimir se ejecute callback y otras cosas 

// imprimir()//llamamos a la funcion imprimir y no le pasamos nada, esto es una funcion anonima

//Se ejecutara despues de que la tarea se haya completado 

const mensaje = function(){
    console.log('Hola, este mensaje se muestra luego de 5 segundos');
}
setTimeout(mensaje, 5000);//se ejecuta despues de 5 segundos 


setTimeout(function(){
    console.log('Hola, este mensaje se muestra luego de 8 segundos');
}, 8000);//se ejecuta despues de 5 segundos 