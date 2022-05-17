const http=require('http'); //crea el servidor de forma nativa de node js
const server=http.createServer((req,res)=>{ //crea el servidor y le pasa una funcion anonima que recibe dos parametros (req lo que la gente manda,res lo que vamos a responder) y es la que se ejecuta cuando se recibe una peticion del cliente (request) y una respuesta (response) 
    //respuesta del servidor
    res.statusCode=200; //establece el codigo de respuesta
    res.setHeader('Content-Type','text/plain'); //establece el tipo de contenido que va a enviar el servidor
    res.end('Hola mundo desde server node'); //envia el mensaje, en este caso un string que es el mensaje que va a enviar el servidor al cliente (request) 
});
server.listen(3000,()=>{ //listen es un metodo que escucha el servidor en el puerto 3000 y una funcion anonima que se ejecuta cuando el servidor esta listo
    console.log('Servidor escuchando en el puerto 3000'); //mensaje que se envia cuando el servidor esta listo
});//callback que se ejecuta cuando el servidor esta listo

//rutas de la aplicacion web (servidor) 
