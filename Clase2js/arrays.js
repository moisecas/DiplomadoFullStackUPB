//poder guardar elementos o variables de diferente tipo dentro de una misma estructura

var array1= [1,2,3,4,5,6, "numeros", true] //separados por ,
//var arrayColor = ["pink","blue","red"] 

// array1.find //encontrar dentro de un array algo
// array1.forEach(element => alert(element)) //recorrer, element va a estar recorriendo el array, cada vez que me haga un elemento me haga una alert
// array1.push(1) //push agrega al final, pop elimina el elemento de un array el ultimo
// console.log(array1); 
var variable = array1.find(element=>element<4) 
console.log(variable) 
