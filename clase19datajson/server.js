const express = require('express');
const app = express(); //crea el servidor de forma usando express 
const user = require('./ejercicio'); //rutas de la aplicacion web (servidor)
const fs = require('fs'); //modulo nativo de node js para manejar archivos
app.set("view engine", "ejs"); //setea el motor de plantillas para ejs 
var img = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anas_platyrhynchos_qtl1.jpg" 

app.listen(3000, () => { //función callback que se ejecuta cuando el servidor esta listo 
    console.log('ONFIRE 3 0 0 0');
}); //listen es un metodo que escucha el servidor en el puerto 3000 y una funcion anonima que se ejecuta cuando el servidor esta listo

//mostrar data.json
app.get('/data', (req, res) => {
    const data = fs.readFileSync('./data.json'); //lee el archivo data.json y lo guarda en data
    const dataJson = JSON.parse(data); //convierte el archivo data.json a un objeto json
    res.send(dataJson);
    console.log(dataJson); //muestra el objeto json 
})

app.get("/motorEjs",(req,res)=>{

 
    res.render("index.ejs",{img:img})
   
   
})

app.get('/render', (req, res) => {
    res.render('/views/index.ejs'); //renderiza el archivo index.ejs 
})

