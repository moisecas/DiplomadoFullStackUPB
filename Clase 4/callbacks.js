// En JS, una función tiene la misma categoría que cualquier otro tipo de valor (números, strings, etc.). Por ende, se puede pasar una función como parámetro de otra función. Esto es lo que se conoce como callback

function saludar (nombre){
    console.log("hola como estas" + nombre)

}
function despedir(nombre){
    console.log("hasta luego que este bien" + nombre)
}

function insultar(nombre){
    console.log("te odio" + nombre)
}

//funciones como argumentos dentro de otra función 
function realizarAccion(nombre,callback){
    callback(nombre)
}

setTimeout(despedir,5000)

//setTimeout para darle tiempo a otra función para que se ejecute 