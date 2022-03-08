//Repaso de conceptos generales sobre tipos de datos encontrados en js. 
console.log("hola mundo"); 
const numeroConst=1
    var numero 
    let numero2

    numero = 2.1
    numero=true
    numero = "hola mundo"

    numero=numero+1 

    var cadena = "hola tayson"
    numero = numero + cadena
    numero=numero-1 


    console.log(numero) 
    var numero=cadena.indexOf("Hola")
    numero2=cadena.length //saber cuantas posiciones hay en mi arreglo 

    var nombre="moiso"
    var apellido="castro"
    mensaje=`hola ${nombre} ${apellido} bien o no?` //forma de presentar un mensaje a partir de variables 
    
    console.log("hola a todos")
    var bool=new Boolean(true) 

    var nota=prompt("introduce tu nota") //para pedir datos por navegador
    
     
    var bool 
    
    bool = prompt("quiere jugar? escribe 1 si quieres jugar y 0 si no")
    if(bool==1){
        var nota=prompt("introduce tu nota")
        alert("mi nota es"+nota) 

     } else if(bool==0 || bool ==1){
        alert("gracoas x jugar") 

     } else {
        alert("ingresaste mal los datos")
        bool = prompt("quiere jugar? escribe 1 si quieres jugar y 0 si no")

     }
