const  button_submit = document.getElementById("Button_submit")
const input_name = document.getElementById("name")
const input_last_name=document.getElementById("last_name") 
const NameView=document.getElementById("nombre")
const LastNameView=document.getElementById("apellido")

button_submit.addEventListener("click", ingresarText,false) //cuando suceda el evento click, haga

function ingresarText(){
    const nombre = input_name.value
    const apellido = input_last_name.value
    const persona = {nombre,apellido} 
    localStorage.setItem("persona", JSON.stringify(persona))  //aplicando localstorage en este formulario 
    NameView.innerText=nombre
    LastNameView.innerText=apellido
    
} 

window.addEventListener("load",cargar(),false) 

function cargar(){ //cargar local storage 
    for (let index = 0; index < localStorage.length; index++) { //recogienod mi local storage 
        let clave = localStorage.key(index)        
        let persona = JSON.parse( localStorage.getItem(clave))
        
        
    }
}

