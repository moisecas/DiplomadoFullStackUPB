console.log("inicio de programa"); // imprime en consola

setTimeout(() => { // funcion de flecha que recibe un parametro
    console.log("primer timeout"); // imprime en consola
}, 3000); // tiempo en milisegundos en que se ejecuta la funcion

setTimeout(() => { // funcion de flecha que recibe un parametro
    console.log("segundo timeout"); // imprime en consola
}, 0); // tiempo en milisegundos en que se ejecuta la funcion

setTimeout(() => { // funcion de flecha que recibe un parametro
    console.log("tercer timeout"); // imprime en consola
}, 0); // tiempo en milisegundos en que se ejecuta la funcion


console.log("fin de programa"); // imprime en consola

// La pila de procesos de javascript es una estructura de
//  datos que almacena las instrucciones que se deben ejecutar.
//  Da prioridad a las instrucciones que estan en la parte superior y que se van ejecutando de manera sincrona. 
//  Para luego ejecutar las instrucciones que estan en la cola de tareas, que son las que se ejecutan de 
//  manera asincronas .