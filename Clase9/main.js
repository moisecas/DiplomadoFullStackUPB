const  button_submit = document.getElementById("Button_submit")
const input_name = document.getElementById("name")
const input_last_name=document.getElementById("last_name") 
const NameView=document.getElementById("nombre")
const LastNameView=document.getElementById("apellido")

button_submit.addEventListener("click", ingresarText,false) //cuando suceda el evento click, haga

function ingresarText(){
    const nombre = input_name.value
    const apellido = input_last_name.value
    const nombres = [nombre,apellido] 
    NameView.innerText=nombre
    LastNameView.innerText=apellido
    document.write(nombres) 
} 

