
//fetch 

const contenedor = document.getElementById("contenedor")

const contenido = (src)=>{
    return `<img src="${src}" alt="dog" srcset=""></img>`
}

const url = "https://dog.ceo/api/breeds/image/random"

async function fetchdog(url){
    try {
        const respuesta = await fetch(url)
        console.log("hola")
        console.log(respuesta)
        const respuestajson=await respuesta.json()
        console.log(respuestajson) 
        renderHTML(respuestajson.message) 
        
    } catch (err) {
        console.log("error") 
        
    }

}
function renderHTML(src){
    contenedor.innerHTML+=contenido(src)

}
const imgsrc = fetchdog(url) 

