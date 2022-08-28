//objete user con un metodo mostrar nombre completo
var user = {
    nombre: 'Juan',
    apellido: 'Perez',
    mostrarNombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

//constructor permite crear objetos con una funcion
function Usuario(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mostrarNombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

var usuario = new Usuario('simon', 'zapata');
console.log(usuario.mostrarNombreCompleto()); //simon zapata 

const user2 = new Usuario('Juan', 'Perez');
const user3 = new Usuario('Pedro', 'P');
const user4 = new Usuario('angelica', 'Porras'); 
console.log(user2, user3, user4);

//modificar datos
user2.nombre = 'Andres';
user3.apellido = 'Paz';
console.log(user2, user3, user4);


