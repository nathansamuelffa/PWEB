const funcionario1A = {
    matricula: "12345",
    nome: "João Silva",
    funcao: "Desenvolvedor Full Stack"
};
console.log(funcionario1A);

function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const funcionario1B = new Funcionario("67890", "Maria Oliveira", "Gerente de Projetos");
console.log(funcionario1B);

class FuncionarioClasse {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario1C = new FuncionarioClasse("11223", "Carlos Souza", "Analista de Dados");
console.log(funcionario1C);