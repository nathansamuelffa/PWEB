// Seleção dos elementos
const janela = document.getElementById("janela");
const titulo = document.getElementById("titulo");

// URLs das imagens
const imgFechada = "https://thumbs.dreamstime.com/b/janela-de-madeira-isolada-em-fundo-cimento-fechada-com-parede-do-tem-cor-branca-ou-cores-gesso-na-158847059.jpg?w=576";
const imgAberta = "https://m.media-amazon.com/images/I/714-A3XBRNL._AC_SX679_.jpg";
const imgQuebrada = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mestlin_Kulturhaus_zerbrochenes_Fenster_2012-09-05_069.JPG/500px-Mestlin_Kulturhaus_zerbrochenes_Fenster_2012-09-05_069.JPG";

let estaQuebrada = false;

// Função para abrir
janela.addEventListener("mouseover", () => {
    if (!estaQuebrada) {
        janela.src = imgAberta;
        titulo.innerText = "Janela Aberta";
    }
});

// Função para fechar
janela.addEventListener("mouseout", () => {
    if (!estaQuebrada) {
        janela.src = imgFechada;
        titulo.innerText = "Janela Fechada";
    }
});

// Função para quebrar
janela.addEventListener("click", () => {
    janela.src = imgQuebrada;
    titulo.innerText = "Janela Quebrada";
    estaQuebrada = true; // Trava o estado
});