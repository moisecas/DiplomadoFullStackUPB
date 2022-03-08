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