function upperCase(str){
    var array = str.split(" ")
    var newArray1=[]
    for (let index=0; index<array.length; index++){
        newArray1.push(array[index].charAt(0).toUpperCase()+array[index].slice(1)) 
    }
    return newArray1.join(" ")//join me crea una cadena retornado separado los string con el parametro que le di en el espacio ()

}
alert(upperCase("hola como estás"))  // ||console.log(upperCase("hola como estás")) 