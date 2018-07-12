const fs = require('fs');
const colors = require('colors');


let listarTabla = ( base,limite ) =>{
    console.log(`============= tabla del ${ base }=================`.green);

    return new Promise((resolve, reject) =>{
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i}`);
        }
    })
}

let crearArchivo =( base, limite = 10) =>{
    return new Promise((resolve, reject)=>{
        let data = '';

    for (let i = 0; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) =>{
        if( err ) 
            reject(err)
        else
            resolve(`Tabla-${ base }.txt`);
    });
    }
)};

module.exports={
    crearArchivo,
    listarTabla
}