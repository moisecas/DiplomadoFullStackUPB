alert("Bienvenido al ejercicio de agregar y listar tareas en el local storage del diplomado fulltack UPB")

const  button_submit = document.getElementById("Button_submit")
const input_tarea = document.getElementById("input_tarea") 
const WorkView=document.getElementById("tareas")

function ingresarTareas(){
    const tarea = input_tarea.value
    
    //const tareass = {tarea} 
    localStorage.setItem("tareas", JSON.stringify(tarea))  //aplicando localstorage en este formulario 
    WorkView.innerText=tarea
  
    
}

ingresarTareas() 