guardar_localstorage() 

obtener_localstorage() 

function obtener_localstorage(){

    if(localStorage.getItem("nombre")){
        //cuando se sabe que el nombre est en el local storage
        let nombre = localStorage.getItem("nombre")
        let persona = JSON.parse( localStorage.getItem("persona"))
        console.log(nombre)
        console.log(persona) 
    }else{
        console.log("no hay en el localstorage")
    }


}

function guardar_localstorage(){

}

let persona = {
    nombre: "moises",
    edad: 30,
    correo: "tayson@",
    coords:{
        lat: 10,
        lng: -10
    }


}
let nombre = "maria"

localStorage.setItem("persona", JSON.stringify(persona))
localStorage.setItem("nombre", nombre) 
