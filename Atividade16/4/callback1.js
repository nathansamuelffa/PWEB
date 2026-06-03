const fs = require('prompt-sync')();

function saudacao(nome){
    console.log('Olá ' + nome);
}

function entradaNome(xablau){
    const nome = prompt("Nome:");
    xablau(nome);
}

entradaNome(saudacao);