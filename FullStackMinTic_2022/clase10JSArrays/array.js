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

//array de objetos (JSON) empleado
var employees2 = [
    { name: "John", age: 30, city: "New York", enterprise: "Google" },
    { name: "Mary", age: 28, city: "London", enterprise: "Facebook" },
    { name: "Bob", age: 32, city: "Paris", enterprise: "Microsoft" },
    { name: "Jane", age: 25, city: "New York", enterprise: "Google" },
    { name: "Peter", age: 29, city: "London", enterprise: "lenovo" },
    { name: "Susan", age: 33, city: "Paris", enterprise: "apple" },
    { name: "Mark", age: 26, city: "New York", enterprise: "Google" },
]

console.log("*****for each con arrow function ver enterprise*******");
employees2.forEach(employee => console.log(employee.name + " " + employee.enterprise)) //recibe employee como parametro y lo imprime

console.log("*****name city*******");
const nombreciudad=[];
employees2.forEach(employee => nombreciudad.push(employee.name + " " + employee.city)) //recibe employee como parametro y lo imprime en el array nombreciudad
console.log(nombreciudad); //push agrega al final del array 


//metodo map para recorrer array 
console.log("*****metodo map*******");
const nombreciudad2 = employees2.map(employee => employee.name + " " + employee.city); 
console.log(nombreciudad2); //muestra el array nombreciudad2
//recibe employee como parametro y lo imprime en el array nombreciudad  

const nombres = employees2.map(employee => { 
    return nombreciudad2.push(employee.name + " " + employee.city)
   
}); //recibe employee como parametro y lo imprime en el array nombres

console.log("*****enterprise microsoft*******");
//for
for (var i = 0; i < employees2.length; i++) {
    if (employees2[i].enterprise == "Microsoft") { //si enterprise es igual a microsoft imprime
        console.log(employees2[i].name); //imprime el nombre del empleado que trabaja en microsoft 
    }
}
//filter
console.log("*****filter enterprise microsoft*******");
const microsoft = employees2.filter(employee => employee.enterprise == "Microsoft"); //recibe employee como parametro y lo imprime en el array microsoft

//filter para recorrer array
console.log("*****filter enterprise google name*******");
const empleadoGoogle = employees2.filter(employee => employee.enterprise == "Google"); //recibe employee como parametro y lo imprime en el array empleadoGoogle
console.log(empleadoGoogle); //muestra el array empleadoGoogle 

//reduce
console.log("*****reduce enterprise google name*******");
const empleadoGoogle2 = employees2.reduce((total, employee) => { //reduce es para sumar, total es el acumulador
    if (employee.enterprise == "Google") {
        total.push(employee.name);
    }
    return total;
})//recibe employee como parametro y lo imprime en el array empleadoGoogle2
console.log(empleadoGoogle2); //muestra el array empleadoGoogle2