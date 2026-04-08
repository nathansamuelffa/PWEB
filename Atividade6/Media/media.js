// Lendo os dados com Prompt
const nome = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const nota4 = parseFloat(prompt("Digite a quarta nota:"));

// Calculando a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibindo o resultado com Alert
alert(`Aluno: ${nome}\nMédia Final: ${media.toFixed(2)}`);