//tipos de datos en typescript
//number
let numero: number = 12;
//string
let texto: string = "Hola mundo";
//boolean
let verdadero: boolean = true;
let falso: boolean = false;
//any (cualquier tipo de datos)
let cualquiera: any = "hola";
cualquiera = 12;
//array (arreglo)
let array: string[] = ["hola", "mundo"];
//tupla (es una coleccion de tipos de datos)
let tupla: [number, string] = [1, "hola"];
//enum (es una coleccion de valores)
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"

}
let colorFavorito: Color = Color.Rojo;
//any (cualquier tipo de datos)
let cualquiera2: any = "hola";
cualquiera2 = 12;

//clases
class Villano {
    constructor(
        public nombre: string,
        public edad: number,
        public poder: string,
        public estatura: string
    ) {

    }
}
let lex = new Villano("Lex Luthor", 54, "Super Fuerza", "1.80m");
console.log(lex); //imprime el objeto

//objeto literal (es una coleccion de propiedades)
let ironMan = {
    nombre: "Tony Stark",
    edad: 45,
    poder: "Super Fuerza",
}

//instancia de variables
let spiderman = new Villano("Peter Parker", 17, "Spiderman", "1.70m"); //instancia de la clase Villano

console.log(spiderman); //imprime el objeto


//declaracion nombre tipo de vairiable asignamos valor
let nombre: string = "Juan";
let edad: number = 12;
let poder: string = "Super Fuerza";
let estatura: string = "1.70m";
//double
let precio: number = 12.12;
//boolean
let mayorDeEdad: boolean = true; //false es otra opcion

