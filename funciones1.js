//arrow functiones versión corta de las funciones, retorna inmediatamete un valor, metodo 

//funciones 1 js
function sum (a,b){
    
    return a+b
} 
var result = sum(3,1);  
console.log("el resultado de la suma es: ",result);  

function sumTwo (a,b,c){
    return a + b + c
}
var resultTwo = sumTwo(3,500,9) 
console.log("el resultado de la suma 2 es: ",resultTwo);

const sum3 = function(a,b){return a + b} //versión corta
console.log(sum3(5,6));   

const sum4=(a,b) =>{return(a+b)} //arrow function 
console.log(sum4(5,90)); 

const sum5 = (a,b)=>a+b //arrow function  
console.log(sum5(9,90));  
