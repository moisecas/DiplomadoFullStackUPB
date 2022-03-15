var array = [[1,2,3,4],[5,6,7,8,9],[10,11,12,13]] //array de varios arrays
var nombre=["tayson", "andres", "simon"]

var arrayName = [["Name","Phone","email"],["Moisés","573183483807","mdcasmar"]] 

console.log(arrayName[0][1]); //output phone 

//declarar una matriz 
for (let index = 0; index < array.length; index++){

    for (let index2 = 0; index2 < arrayName[index].length; index2++){
        console.log(arrayName[index][index2]) 
    }
    const element = array[index]; 

}

let index = 0 
let index2 = 0
while (index < arrayName.length)
index2=0 
    while (index2 < arrayName[index].length){
        console.log(arrayName[index][index2])
        index2++
    }



var matriz=[]