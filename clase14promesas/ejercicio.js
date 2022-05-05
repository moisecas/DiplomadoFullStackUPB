const imprimirnombre=(nombre,apellido)=>{ 
    return new Promise((res,reject)=>{ //resolve y reject son funciones
        if(typeof nombre !== 'string' || typeof apellido !== 'string'){ //si no es un string
            reject('Error, los datos no son correctos');
        }else{
            let persona={//objeto persona
                nombre:nombre,
                apellido:apellido
            }
            setTimeout(()=>{//setTimeout es una funcion que se ejecuta despues de un tiempo 
                res(persona) //muestra el nombre y apellido
            },2000);//tiempo de espera
        }
       
    });
}
imprimirnombre('Juan','Perez') //llamando a la funcion y pasando los parametros de nombre y apellido de la funcion imprimirnombre
.then((res)=>console.log(res)) //then es una funcion que se ejecuta cuando se resuelve la promesa
.catch((reject)=>console.log(reject)); //catch es una funcion que se ejecuta cuando se rechaza la promesa 