// --- FUNÇÕES ---

// 1. Maior de três
function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

// 2. Ordem crescente
function ordemCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y).join(", ");
}

// 3. Palíndromo
function ehPalindromo(frase) {
    let formatada = frase.toLowerCase().replace(/\s+/g, '');
    let invertida = formatada.split('').reverse().join('');
    return formatada === invertida ? "É um palíndromo!" : "Não é um palíndromo.";
}

// 4. Subconjunto
function verificarSubconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";
    return p1.includes(p2) ? "É um subconjunto" : "Não é um subconjunto";
}

// 5. Dia da semana
function diaDaSemana(dataString) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let data = new Date(dataString + "T00:00:00"); // Adicionado T00:00:00 para evitar erro de fuso horário
    return isNaN(data.getTime()) ? "Data inválida" : dias[data.getDay()];
}

// --- EXECUÇÃO COM ALERT E PROMPT ---

// Exemplo para a Função 1
let n1 = Number(prompt("Função 1: Digite o primeiro número:"));
let n2 = Number(prompt("Função 1: Digite o segundo número:"));
let n3 = Number(prompt("Função 1: Digite o terceiro número:"));
alert("O maior número é: " + maiorDeTres(n1, n2, n3));

// Exemplo para a Função 3
let texto = prompt("Função 3: Digite uma palavra ou frase para verificar palíndromo:");
alert(ehPalindromo(texto));

// Exemplo para a Função 5
let dataUser = prompt("Função 5: Digite uma data (AAAA-MM-DD):");
alert("O dia da semana é: " + diaDaSemana(dataUser));