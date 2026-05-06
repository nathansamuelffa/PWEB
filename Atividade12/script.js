// =========================================================
// EXERCÍCIO 1: FUNÇÃO CONSTRUTORA (RETÂNGULO)
// =========================================================

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

console.log("--- Exercício 1: Retângulo ---");
const baseInput = parseFloat(prompt("Retângulo - Digite a base:"));
const alturaInput = parseFloat(prompt("Retângulo - Digite a altura:"));

const meuRetangulo = new Retangulo(baseInput, alturaInput);
alert("A área do retângulo é: " + meuRetangulo.calcularArea());
console.log(`Base: ${meuRetangulo.base}, Altura: ${meuRetangulo.altura}, Área: ${meuRetangulo.calcularArea()}`);


// =========================================================
// EXERCÍCIO 2: CLASSES, HERANÇA, GET E SET (CONTAS)
// =========================================================

class Conta {
    constructor(nomecorrentista, banco, numero, saldo) {
        this._nomecorrentista = nomecorrentista;
        this._banco = banco;
        this._numero = numero;
        this._saldo = saldo;
    }

    // Getters e Setters
    get nome() { return this._nomecorrentista; }
    set nome(valor) { this._nomecorrentista = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get numero() { return this._numero; }
    set numero(valor) { this._numero = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }
}

class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
        super(nome, banco, numero, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, dataVencimento) {
        super(nome, banco, numero, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
}


console.log("--- Exercício 2: Contas Bancárias ---");

// Criando Conta Corrente
const nomeC = prompt("Conta Corrente - Nome do Titular:");
const saldoC = parseFloat(prompt("Conta Corrente - Saldo:"));
const especialC = parseFloat(prompt("Conta Corrente - Limite Especial:"));

const minhaCorrente = new Corrente(nomeC, "Banco Digital", "123-X", saldoC, especialC);

// Criando Conta Poupança
const nomeP = prompt("Conta Poupança - Nome do Titular:");
const saldoP = parseFloat(prompt("Conta Poupança - Saldo:"));
const jurosP = parseFloat(prompt("Conta Poupança - Taxa de Juros (%):"));
const vencP = prompt("Conta Poupança - Data de Vencimento (DD/MM):");

const minhaPoupanca = new Poupanca(nomeP, "Banco Digital", "456-P", saldoP, jurosP, vencP);

// --- Exibindo os Dados no Console ---
console.log("DADOS DA CONTA CORRENTE:");
console.log(`Titular: ${minhaCorrente.nome}`);
console.log(`Saldo: R$ ${minhaCorrente.saldo}`);
console.log(`Limite Especial: R$ ${minhaCorrente.saldoEspecial}`);

console.log("\nDADOS DA CONTA POUPANÇA:");
console.log(`Titular: ${minhaPoupanca.nome}`);
console.log(`Juros: ${minhaPoupanca.juros}%`);
console.log(`Vencimento: ${minhaPoupanca.dataVencimento}`);

alert("Dados das contas gerados no Console (F12)!");