(()=>{
  let myProduct = "Laptop"; //string
  let myPrice = 12.12; //double

// myProduct= 8; //error porque myProduct es string y 8 es number

myProduct.toUpperCase(); //convierte a mayusculas el string
myProduct.toLowerCase(); //convierte a minusculas el string
myProduct.charAt(0); //devuelve el caracter en la posicion 0
myProduct.charAt(myProduct.length - 1); //devuelve el caracter en la posicion -1
myProduct.indexOf("o"); //devuelve la posicion del caracter
myProduct.lastIndexOf("o"); //devuelve la posicion del caracter
myProduct.substring(0, 2); //devuelve un string desde la posicion 0 hasta la posicion 2
myProduct.substring(2); //devuelve un string desde la posicion 2 hasta el final
myProduct.slice(0, 2); //devuelve un string desde la posicion 0 hasta la posicion 2
myProduct.slice(2); //devuelve un string desde la posicion 2 hasta el final
myProduct.replace("Laptop", "PC"); //reemplaza el string
myProduct.replace(/Laptop/g, "PC"); //reemplaza el string
})()



