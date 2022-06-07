/* 
crud a mongoDB
create
update
delete
read
*/

const mongooose = require('mongoose'); //libreria para conectarse a mongoDB 
const db=mongooose.connection; //conexion a la base de datos
const url='mongodb://localhost:27017/webstore'; //url de la base de datos
const producto = require('./models/Product'); //importar el modelo de productos 

mongooose.connect(url).catch(err => console.log(err)); //manejo de error de conexion a la base de datos  
//conecta a la base de datos de mongoDB

db.on("open", () => {
    console.log("Conectado a mongoDB");
}) //evento que se ejecuta cuando la conexion a la base de datos es exitosa"

db.on("error", (err) => {
    console.log("Error al conectar a mongoDB", err);
}) //evento que se ejecuta cuando la conexion a la base de datos falla

const producto1=new producto({ //objeto de la clase producto que esta en el modelo de productos 
    name: 'Laptop',
    price: 1000,
    description: 'Laptop de ultima generacion'

})
console.log(producto1); 
//guardar producto1 en la base de datos
producto1.save().then(() => {
    console.log('Producto guardado');
}).catch(err => console.log(err));

async function buscarproducto(){
    const productos=await producto.find(); //busca todos los productos
    productos.forEach(producto => {
        console.log(producto);
    }) //recorre el array de productos
    
}
