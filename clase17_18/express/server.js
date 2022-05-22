const express = require('express');
const app = express(); //crea el servidor de forma usando express 

app.listen(3000, () => { //función callback que se ejecuta cuando el servidor esta listo 
    console.log('Servidor escuchando en el puerto 3000');
}); //listen es un metodo que escucha el servidor en el puerto 3000 y una funcion anonima que se ejecuta cuando el servidor esta listo

//middleware
app.use(express.json()); //middleware que se ejecuta antes de que se ejecute cualquier ruta


//rutas
app.get('/', (req, res) => {
    res.send('Hola desde home');
})//ruta raiz, la ruta que se va a ejecutar cuando se haga una peticion GET a la ruta raiz

app.post('/', (req, res) => {
    console.log("Peticion POST recibida"); 
    res.send({nombre: 'Juan', apellido: 'Perez'});
})//ruta raiz, la ruta que se va a ejecutar cuando se haga una peticion POST a la ruta raiz

app.put('/', (req, res) => {
    console.log("Peticion put recibida"); 
    res.send("Peticion put recibida");
})
app.delete('/', (req, res) => {
    console.log("Peticion delete recibida"); 
    res.send("Peticion delete recibida"); 
})

app.get('/abaout', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname}); //envia el archivo index.html
})//ruta de la pagina about


app.post('/consulta', (req, res) => {
    console.log("Hola " + req.body.nombre);
    res.send("Hola " + req.body.nombre);
})

app.get('/ver', (req, res) => {
    //console.log("Hola ");
    res.send("Hola ");
})
