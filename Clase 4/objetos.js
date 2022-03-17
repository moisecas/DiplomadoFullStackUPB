var carro =  new Object() //palabra clave para definirlos Object 

carro.modelo="spark"
carro.year="2020"
carro.marca="chevrolete"

var carro2={
    modelo:"spark",
    year:"2020",
    marca:"chevrolete",
}

console.log(carro2.kilometraje)
for(const key in carro2){
    console.log(carro2[key]) //forma de recorrer el objeto 
}
