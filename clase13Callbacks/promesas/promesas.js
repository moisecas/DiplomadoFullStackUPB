//funciona a la par que otras funciones dentro de lo que renderiza el html 
//then es una funcion que se ejecuta cuando la promesa se resuelve,ejecuta la funcion callback resolve
//catch es una funcion que se ejecuta cuando la promesa se rechaza,ejecuta la funcion callback reject
//finally es una funcion que se ejecuta cuando la promesa se resuelve o rechaza,ejecuta la funcion callback finally

const saludar=()=>{
    return new Promise((resolve, reject)=>{
        if (x=10){
            reject('hola')
        }else{
        let persona={
            nombre:'Juan',
            apellido:'Perez',
            edad:23

        }
        setTimeout(()=>{
            resolve(persona) //consulto a la base de datos, si no hay error, se ejecuta resolve, me devuelve una persona
        }, 8000)//se ejecuta despues de 8 segundos
    }
    })
    }


saludar().then(res=>{
    console.log(res)//mostrará hola mundo

    let responder= "hola "+res.nombre+" "+res.apellido+" "+res.edad //concateno con el nombre y apellido
    console.log(responder)//mostrará hola Juan Perez 23

}).catch(err=>{ //si hay error, se ejecuta reject
    console.log(err)
})

console.log("esto se debe imprimir antes de que se ejecute la promesa")

for (let index = 0; index<100; index++) {
    console.log(index)//se vuelve un codigo bloqueante, se ejecuta en paralelo
    
} //esto se debe imprimir antes de que se ejecute la promesa