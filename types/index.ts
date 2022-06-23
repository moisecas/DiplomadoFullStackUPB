console.log("Hello World");

//tipos de datos
let nombre: string = "Juan";
let edad: number = 20;
let fecha: Date = new Date();
let casado: boolean = false;
let sueldo: number = 1.5;
let hijos: number[] = [1, 2, 3];
let mascotas: string[] = ["perro", "gato", "pez"];
let direccion: { calle: string, numero: number } = {calle: "calle", numero: 123};

//enum
enum Color {Red,Green,Blue};
let colorFavorito: Color = Color.Green; //acceder a un valor de un enum con el nombre del valor

//funciones
function sumar(a: number, b: number): number { //recibe dos parametros y devuelve un numero
    return a + b;
}
console.log(sumar(1, 2)); //3 

var imprimir = (name:string) => {
    return "Hola " + name; //devuelve un string con el nombre que le pasemos como parametro
}
console.log(imprimir("Juan")); //Hola Juan


