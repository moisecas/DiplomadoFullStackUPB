// Según Wikipedia, la programación basada en clases es:
// "...un estilo de programación orientada a objetos (POO), en el que la herencia se produce mediante 
// la definición de clases de objetos, en lugar de que la herencia se produzca únicamente
//  a través de los objetos..."

console.log(typeof"Hola mundo");
console.log(typeof 100)
console.log(typeof true) //typeof devuelve el tipo de dato 

//objeto user
const user={
    name:"Juan",
    lastname:"Perez",
    age:30,
    works:["Frontend","Backend"],
    adress:{
        city:"Ciudad de Mexico",
        country:"Mexico",

    },
    mostrarnombrecompleto:mostrarNombre, //propiedad metodo recibe una funcion como parametro 

}
console.log(user);  

//metodo object create
function mostrarNombre(){
    return "moises c"
}
console.log(user.mostrarnombrecompleto()); //metodo mostrarnombrecompleto() se ejecuta y devuelve el valor de la funcion mostrarNombre()

//user 2
const user2={
    name:"Juan",
    lastname:"Perez",
    age:30,
    works:["Frontend","Backend"],
    adress:{
        city:"Ciudad de Mexico",
        country:"Mexico",

    },
    mostrarnombrecompleto:function(){ //a un atrubuto se le puede asignar una funcion 
        return "moises david"
    }

}
console.log(user2.mostrarnombrecompleto()); //muestra por consola moises david 

//user 3
const user3={
    name:"Juan",
    lastname:"Perez",
    age:30,
    works:["Frontend","Backend"],
    adress:{
        city:"Ciudad de Mexico",
        country:"Mexico",

    },
    mostrarnombrecompleto(){ //funcion dentro de un objeto 
        console.log(this.age) //this hace referencia al objeto en el que se encuentra la funcion
        return "juan simon"
    }

}

console.log(user3.mostrarnombrecompleto()); //muestra por consola juan simon  



//cuenta bancaria

const cuenta={
    numerocuenta:123456789,
    saldo:0,
    depositar:function(monto){
        this.saldo+=monto;
        return this.saldo;
    }
}
console.log("El saldo es: " + cuenta.saldo); //muestra el saldo inicial
console.log("Deposito: "+ cuenta.depositar(100)); //ejecuta metodo depositar y muestra el saldo actualizado
console.log("El saldo es: " + cuenta.saldo);  //muestra el saldo actualizado 

function persona(){
    this.nombre="";
    this.apellido="";
    this.edad=30;
    this.mostrarNombre=function(){
        return this.nombre + " " + this.apellido;
    }
}

//instanciar objeto persona para crear mas persona 
const persona1=new persona(); //se crea un objeto persona1 de la clase persona, instancia de la clase persona
persona1.nombre="Juan";
persona1.apellido="Perez";
console.log(persona1.mostrarNombre()); //muestra por consola Juan Perez
const persona2=new persona(); //se crea un objeto persona2 de la clase persona
persona2.nombre="Moises";
persona2.apellido="David";
console.log(persona2.mostrarNombre()); //muestra por consola Moises David 


