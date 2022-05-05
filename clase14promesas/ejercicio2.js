const imrpimirnombre = (nombre, apellido) => {
    return new Promise((resolve, reject) => {
        if (typeof nombre !== 'string' || typeof apellido !== 'string') {
            reject('Error, los datos no son correctos');
        } else {
            let persona = {
                nombre: nombre,
                apellido: apellido
            }
            setTimeout(() => {
                resolve(persona)
            }, 2000);
        }
    });
}

const imprimirnombre2 = (nombre, apellido) => {
    return new Promise((resolve, reject) => {
        if (typeof nombre !== 'string' || typeof apellido !== 'string') {
            reject('Error, los datos no son correctos');
        } else {
            let persona = {
                nombre: nombre,
                apellido: apellido
            }
            setTimeout(() => {
                resolve(persona)
            }, 2000);
        }
    });
}

imprimirnombre('Juan', 'Perez')
.then((res) => {
    console.log(res)
    return imprimirnombre2('Pedro', 'Perez')})

    .then((res) => {
        console.log(res)
    })