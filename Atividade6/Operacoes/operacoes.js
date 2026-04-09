const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const soma = num1 + num2;
const subtracao = num1 - num2;
const produto = num1 * num2;
const divisao = num1 / num2;
const resto = num1 % num2;

alert(
    `Resultados para ${num1} e ${num2}:\n\n` +
    `Soma: ${soma.toFixed(2)}\n` +
    `Subtração: ${subtracao.toFixed(2)}\n` +
    `Produto: ${produto.toFixed(2)}\n` +
    `Divisão: ${divisao.toFixed(2)}\n` +
    `Resto da divisão: ${resto.toFixed(2)}`
);

if (confirm("Deseja realizar um novo cálculo?")) {
    location.reload();
}