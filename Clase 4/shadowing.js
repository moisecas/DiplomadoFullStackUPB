//El mismo identificador se puede usar en scopes anidados. La búsqueda siempre inicia en el nivel más interno.
const a = 5 
if (a>3){
    const b =0;
    if(true){
        const b = 8; 
    }
    let a = "mensaje"
    console.log(a)
    console.log(b) 
}