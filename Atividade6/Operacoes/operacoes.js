// Recebendo os números
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

// Realizando os cálculos
const soma = num1 + num2;
const subtracao = num1 - num2;
const produto = num1 * num2;
const divisao = num1 / num2;
const resto = num1 % num2;

// Exibindo os resultados com Alert
alert(
    `Resultados para ${num1} e ${num2}:\n\n` +
    `Soma: ${soma}\n` +
    `Subtração: ${subtracao}\n` +
    `Produto: ${produto}\n` +
    `Divisão: ${divisao}\n` +
    `Resto da divisão: ${resto}`
);

// Exemplo de uso do Confirm
if (confirm("Deseja realizar um novo cálculo?")) {
    location.reload(); // Recarrega a página para reiniciar
}