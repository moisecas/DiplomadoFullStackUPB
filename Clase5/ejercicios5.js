// Escriba el comando para agregar el lenguaje "Go" al final de la matriz de idiomas.
// Cambia la dificultad al valor de 7.
// Usando la deletepalabra clave, escriba el comando para eliminar la clave de chistes del objeto de programación.
// Escriba el comando para agregar una nueva clave llamada isFun y un valor de true al objeto de programación.
// Usando un ciclo, itere a través de la matriz de idiomas y console.log todos los idiomas.
// Mediante un bucle, console.log todas las claves en el objeto de programación.
// Usando un bucle, console.log todos los valores en el objeto de programación.


let programacion = {
    lenguajes : [ " JavaScript " , " Python " , " Ruby " ],
    desafiante : true,
    gratificante : true,
    dificultad : 8 ,
    chistes : " http://stackoverflow.com/questions/234075/what-is -su-mejor-programador-broma "
};

//accedemos al objeto y agregamos 
programacion.lenguajes.push("go")
console.log(programacion)

//cambiar a dificultad 7 
programacion.dificultad=7
console.log(programacion) 

//delete palabra
delete programacion.chistes 
console.log(programacion) 

//iterar matriz idiomas 
for (let i = 0; i < programacion.lenguajes.length; i++){
    console.log(programacion.lenguajes[index]); 
}
for (let key in programacion){ //entre of y in, of para arreglos y in para objetos 
    console.log(key) 
}