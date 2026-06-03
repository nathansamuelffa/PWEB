function Parte1(){
    for(let i = 1; i <= 10; i++){
        console.log("Primeira parte:" + 1);
    }
}

setTimeout(Parte1, 2000);

const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    if(err)
        throw err;

    const registros = data.toString().split('\n');
    registros.forEach((registros, index) => {
        console.log("       segunda parte:" + registro + " " + index);
    });
});