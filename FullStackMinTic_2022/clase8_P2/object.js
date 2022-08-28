new Object();
var obj = new Object();
console.log(obj);

const persona2 = {}
console.log(persona2.constructor === Object); //true 


//crear un objeto string con un metodo que devuelva el string concatenado con un string
const string=new Object("Tyson");
string.name = "carlos"; //agregar una propiedad al objeto string 
string.test= function(){
    return this + " "+ "prueba" 
}
console.log(string.test());
console.log(string.name); //muestre la propiedad name del objeto string 

//mostrar key de usuario 
const usuario = {
    nombre: 'moises',
    apellido: 'zapata',
    edad: '25',
    telefono: '123456789'
}
//mostrar key
console.log("key");
console.log(Object.keys(usuario));
//mostrar value
console.log("value");
console.log(Object.values(usuario));  //muestra los valores de las propiedades del objeto usuario

//mostrar key y value
console.log("key y value");
for (const key in usuario) {
    console.log(key, usuario[key]);
}

//constructor auto
function Auto() {
    this.marca = "";
    this.modelo = "";
    this.color = "";
    this.year = "";
}
const auto = new Auto();
auto.marca = "Toyota";
auto.modelo = "Corolla";
auto.color = "Blanco";
auto.year = "2019";
console.log(auto); 

const auto2 = new Auto(); //crear el objeto auto2 con el constructor auto
auto2.marca = "Toyota"; //asignar un valor a la propiedad marca del objeto auto2 
auto2.modelo = "Corolla"; //asignar un valor a la propiedad modelo del objeto auto2 
auto2.color = "Blanco"; //definiendo el objeto 
auto2.year = "2019"; 
console.log(auto2); 

//constructor motor     
function Motor(cilindros, tipo) { //con parametros cilindros y tipo
    this.cilindros = cilindros; //this.cilindros es una propiedad del objeto motor y su valor es cilindros
    this.tipo = tipo; //this.tipo es una propiedad del objeto motor y su valor es tipo
    this.mostrarCilindros = function () {
        return this.cilindros;
    } //crear un metodo mostrarCilindros que muestre el valor de cilindros
    console.log("cilindraje desde función1: " + this.mostrarCilindros()); //mostrar el valor de cilindros
    
}
const motor = new Motor(4, "gasolina"); //crear el objeto motor con el constructor motor
const motor2 = new Motor(5, "gas"); //crear el objeto motor2 con el constructor motor
console.log(motor); //muestra el objeto motor
console.log(motor2); //muestra el objeto motor2  

//modificar motor
motor.cilindros = 6; //modificar el valor de la propiedad cilindros del objeto motor
//mostrar cilindros motor
console.log("cilindraje: "+ motor.cilindros); //muestra el valor de la propiedad cilindros del objeto motor

console.log("cilindraje desde función: " + motor.mostrarCilindros)  


