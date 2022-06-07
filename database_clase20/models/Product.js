const {Schema, default: mongoose} = require('mongoose');

//representar los datos hacia una base de datos
const productschema=new Schema({
    name: String, //propiedades y tipo de datos 
    price: Number,
    description: String,
})

module.exports=mongoose.model('Productos',productschema); //exportar el modelo para poder usarlo en otras partes
//exportamos, nomnre el modelo y el schema que se va a usar para representar los datos 

