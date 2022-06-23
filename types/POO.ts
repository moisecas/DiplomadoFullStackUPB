class carro {
    public modelo: string;
    public anio: number;
    public color: string;
    public marca: string;
    public velocidad: number;
    private motor: number;

    constructor(modelo: string, anio: number, color: string, marca: string, velocidad: number, motor: number) { //todo lo que se ponga en el constructor va a los atributos de la clase
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.marca = marca;
        this.velocidad = velocidad;
        this.motor = motor;
    } //constructor crea los objetos de la clase

     
}
const auto = new carro("Ford", 2020, "2", "Ford", 100, 2); 
console.log(auto);
