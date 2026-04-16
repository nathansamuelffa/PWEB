const OPCOES = {
    pedra: { emoji: '✊', vence: 'tesoura' },
    papel: { emoji: '✋', vence: 'pedra' },
    tesoura: { emoji: '✌️', vence: 'papel' }
};

function jogar(escolhaUsuario) {
    const random = Math.random();
    const keys = Object.keys(OPCOES);
    const escolhaCPU = keys[Math.floor(random * 3)];
    
    let msg, cor;

    if (escolhaUsuario === escolhaCPU) {
        msg = "Equilíbrio! (Empate) 🪢";
        cor = "empate";
    } else if (OPCOES[escolhaUsuario].vence === escolhaCPU) {
        msg = "Você dobrou as leis da probabilidade! 🎉";
        cor = "ganhou";
    } else {
        msg = "Brendan Eich venceu! 🧑‍💻";
        cor = "perdeu";
    }

    const placar = document.getElementById('placar');
    placar.classList.remove('escondido');
    
    document.getElementById('voce-area').innerText = OPCOES[escolhaUsuario].emoji;
    document.getElementById('cpu-area').innerText = OPCOES[escolhaCPU].emoji;
    
    const divMensagem = document.getElementById('mensagem');
    divMensagem.innerText = msg;
    divMensagem.className = "mensagem " + cor;
}