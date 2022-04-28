function suma(a,b){
    return a+b
}
alert(suma(1,2,3))

var arreglo=[1,2,3]
function sumarArray(arreglo){

}
sumarArray(arreglo)

function sumaAll(...args){
    let suma = 0
    for(let arg of args) suma+=arg 
    return suma 

} 

 

alert(sumaAll(1,2,3)) 

function nombres(primernombre,apellido, ...info){
    alert(primernombre+""+apellido)
    for (const iterator of info){
        alert(iterator)
    }
}
nombres("andres","castro", 1,true) 

//operador 
let arreglo= [3,5,1]
console.log(Math.max(arreglo[0],arreglo[1])) //muestra la posición en ese rango 

//spread
let arreglo2 = [3,5,2]
let string = "moises"
console.log(Array.from(string))
console.log([...string]) 
//Trabajar con arrays, añadir un array dentro de otro, arrays anidados. 

