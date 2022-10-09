function sumar (a,b){
    return a+b;
}

function restar (a,b){
    return a-b;
}

function multiplicar (a,b){
    return a*b;
}

function dividir (a,b){
    if(b===0){
        console.log("No se puede dividir por cero");
    }else{
        return a/b;

    }
    
}

exports.suma = sumar; // Exportamos la funcion suma del modulo math.js para poder usarla en index.js y así con las demás 
exports.resta = restar;
exports.multiplicacion = multiplicar;
exports.division = dividir;
