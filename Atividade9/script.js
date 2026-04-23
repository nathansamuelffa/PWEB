// --- DECLARAÇÃO DAS FUNÇÕES ---

// 1. Maior de três números
function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

// 2. Ordem crescente
function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros.join(", ");
}

// 3. Palíndromo
function ehPalindromo(frase) {
    let formatada = frase.toLowerCase().replace(/\s+/g, '');
    let invertida = formatada.split('').reverse().join('');
    return formatada === invertida ? "É um palíndromo!" : "Não é um palíndromo.";
}

// 4. Subconjunto
function verificarSubconjunto(p1, p2) {
    // Retorna erro se uma delas/ou duas são vazias ou undefined
    if (!p1 || !p2 || p1.trim() === "" || p2.trim() === "") {
        return "erro";
    }
    // Verifica se a segunda está contida na primeira
    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5. Dia da semana
function diaDaSemana(dataString) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    // Adicionamos o horário para evitar que o fuso horário mude o dia
    let data = new Date(dataString + "T12:00:00"); 
    return isNaN(data.getTime()) ? "Data inválida" : dias[data.getDay()];
}

// --- EXECUÇÃO INTERATIVA (ALERTS E PROMPTS) ---

// Teste 1: Maior de 3
let n1 = Number(prompt("1. Digite o primeiro número:"));
let n2 = Number(prompt("1. Digite o segundo número:"));
let n3 = Number(prompt("1. Digite o terceiro número:"));
alert("O maior número é: " + maiorDeTres(n1, n2, n3));

// Teste 2: Ordem Crescente
let v1 = Number(prompt("2. Digite o num1 para ordenar:"));
let v2 = Number(prompt("2. Digite o num2 para ordenar:"));
let v3 = Number(prompt("2. Digite o num3 para ordenar:"));
alert("Ordem crescente: " + ordemCrescente(v1, v2, v3));

// Teste 3: Palíndromo
let palavra = prompt("3. Digite uma palavra ou frase:");
alert(ehPalindromo(palavra));

// Teste 4: Subconjunto
let texto1 = prompt("4. Digite a palavra principal (ex: programação):");
let texto2 = prompt("4. Digite a palavra para buscar (ex: programa):");
alert("Resultado: " + verificarSubconjunto(texto1, texto2));

// Teste 5: Data
let dataUsuario = prompt("5. Digite uma data (formato AAAA-MM-DD):");
alert("Esse dia será/foi um(a): " + diaDaSemana(dataUsuario));