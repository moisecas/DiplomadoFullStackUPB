const express = require('express');
const app = express(); //crea el servidor de forma usando express 
const morgan = require('morgan'); //middleware que se ejecuta antes de que se ejecute cualquier ruta
const usuarios = require('./user'); //rutas de la aplicacion web (servidor)

//middleware
app.use(express.json()); //middleware que se ejecuta antes de que se ejecute cualquier ruta, convertir peticiones en json a objetos
app.use(morgan('dev')); //morgan es un middleware para saber que tipo de peticiones se estan haciendo, en este caso se esta usando morgan para mostrar en consola lo que se esta haciendo en el servidor


app.listen(3000, () => { //función callback que se ejecuta cuando el servidor esta listo 
    console.log('Servidor escuchando en el puerto 3000');
}); //listen es un metodo que escucha el servidor en el puerto 3000 y una funcion anonima que se ejecuta cuando el servidor esta listo

//middleware
app.use(express.json()); //middleware que se ejecuta antes de que se ejecute cualquier ruta


//rutas
app.get('/home', (req, res) => {
    res.send('Hola desde home');
})//ruta raiz, la ruta

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
    //consultar usuarios por id 
    res.send(usuarios.find(usuario => usuario.id === parseInt(req.params.id)));
     

})
//post para crear usuarios
app.post('/usuarios', (req, res) => {
    const {Name, apellido,Age,cargo} = req.body;
    const usuario = {
        id: usuarios.length + 1,
        Name,
        apellido,
        Age,
        cargo
    }
    usuarios.push(usuario);
    res.send(usuario);
})

//mensaje error 404
app.use((req, res, next) => {
    res.status(404).send('Error 404');
    console.log('Error 404');
})