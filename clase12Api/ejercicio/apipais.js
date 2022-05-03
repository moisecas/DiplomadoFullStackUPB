alert("Bienvenido a api paises, busca banderas de paises. Elaborado por @moisecas") 



const api_url = "https://api.catboys.com/img"  

const spanError = document.getElementById('error') 

async function loadcountrie(){
    const res = await fetch(api_url)
    const data = await res.json(); //recorrer en un array para sacar los datos
    console.log("load")
    console.log(data)
    if(res.status !==200){
        spanError.innerHTML = "hubo un error al cargar la información" + res.status; 

    }else{
        const img1 = document.getElementById('img1') 
              
        
        img1.src= data[0].url //traemos la url de la imagen, la rendereizamos en el html, data posición 0 de la url y así
        

        
        
        //carga los datos, la api nos da unos datos con unas propiedades en json

    }

}



loadcountrie() 

 
