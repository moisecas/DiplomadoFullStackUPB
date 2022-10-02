//employees array
var employees = ["John", "Mary", "Bob", "Jane", "Peter", "Susan", "Mark", "Alice", "Bill", "Karen"];

//tamaño del array
console.log("*****tamaño del array*******");
console.log(employees.length);

console.log("*****for*******");
//recorrer array
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

console.log("*****for each*******");

//for each para recorrer array (no es necesario el contador)
employees.forEach(function (employee) { //callback function (funcion anonima) funcion como parametro
    console.log(employee);
}); //recibe employee como parametro y lo imprime

console.log("*****arrow function*******");

//for each con arrow function
employees.forEach(employee => console.log(employee)); //recibe employee como parametro y lo imprime