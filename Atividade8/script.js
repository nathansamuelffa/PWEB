const respostas = [];
const LIMITE = 45;

const form = document.getElementById('formPesquisa');
const btnEnviar = document.getElementById('btnEnviar');
const progresso = document.getElementById('progress-fill');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (respostas.length >= LIMITE) {
        alert("Limite de 45 respostas atingido!");
        return;
    }

    // Captura os valores dos campos
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    // Adiciona ao array de dados
    respostas.push({ idade, sexo, opiniao });

    // Atualiza interface
    atualizarEstatisticas();
    form.reset();
});

function atualizarEstatisticas() {
    const total = respostas.length;

    // 1. Atualiza contador e barra de progresso
    document.getElementById('contador').textContent = total;
    progresso.style.width = `${(total / LIMITE) * 100}%`;

    // 2. Média de idade
    const somaIdades = respostas.reduce((acc, curr) => acc + curr.idade, 0);
    const media = (somaIdades / total).toFixed(1);

    // 3. Maior e menor idade
    const idades = respostas.map(r => r.idade);
    const maior = Math.max(...idades);
    const menor = Math.min(...idades);

    // 4. Quantidade de Péssimo
    const qtdPessimo = respostas.filter(r => r.opiniao === 1).length;

    // 5. Porcentagem de Ótimo e Bom
    const qtdOtimoBom = respostas.filter(r => r.opiniao >= 3).length;
    const percOtimoBom = ((qtdOtimoBom / total) * 100).toFixed(1);

    // 6. Contagem de Sexo
    const f = respostas.filter(r => r.sexo === 'feminino').length;
    const m = respostas.filter(r => r.sexo === 'masculino').length;
    const o = respostas.filter(r => r.sexo === 'outros').length;

    // Atualiza o DOM com os resultados
    document.getElementById('res-media').textContent = media;
    document.getElementById('res-velho').textContent = maior;
    document.getElementById('res-novo').textContent = menor;
    document.getElementById('res-pessimo').textContent = qtdPessimo;
    document.getElementById('res-porcentagem').textContent = `${percOtimoBom}%`;
    document.getElementById('res-perfil').textContent = `F: ${f} | M: ${m} | O: ${o}`;

    // Remove a classe 'hidden' para mostrar os resultados
    document.getElementById('dashboard').classList.remove('hidden');

    // Desativa botão ao chegar no limite
    if (total === LIMITE) {
        btnEnviar.disabled = true;
        btnEnviar.textContent = "Pesquisa Finalizada";
        btnEnviar.style.backgroundColor = "#64748b";
    }
}