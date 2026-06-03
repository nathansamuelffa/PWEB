function exibeMensagemNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMensagemNaOrdem(
    'Essa é a primeira mensagem\n', function(){
        console.log('Essa é a segunda mensagem\n');
    }
)