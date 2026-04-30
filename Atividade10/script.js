function calcularIMC(peso, altura) {
    // Fórmula: IMC = Peso / (Altura * Altura)
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    // Lógica baseada exatamente na imagem enviada
    if (imc < 18.5) {
        return "MAGREZA - Obesidade Grau: 0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "NORMAL - Obesidade Grau: 0";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "SOBREPESO - Obesidade Grau: I";
    } else if (imc >= 30.0 && imc <= 39.9) {
        return "OBESIDADE - Obesidade Grau: II";
    } else {
        return "OBESIDADE GRAVE - Obesidade Grau: III";
    }
}

function processarIMC() {
    // Captura os valores dos inputs do HTML
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    // Validação simples
    if (!altura || !peso || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const mensagem = classificarIMC(imc);

    // Exibe o resultado na tela
    document.getElementById('resultado').innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(1)}</strong></p>
        <p>Classificação: <strong>${mensagem}</strong></p>
    `;
}