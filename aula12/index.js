// 1: Classe Pessoa Básica
class Pessoa {
    constructor(nome, idade, endereco, formacao) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.formacao = formacao;
    }
}
let pessoa = new Pessoa("Maria", 18, "Rua", "Tecnica");
console.log(pessoa);




// 2: Classe Retângulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
}
let retangulo = new Retangulo(100, 50);
console.log(retangulo);




// 3: Classe Conta Bancária
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    deposito(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
    }
}
let contaBancaria = new ContaBancaria(1000);
console.log(contaBancaria);
let saque = contaBancaria.saque(100);
console.log(saque);
let deposito = contaBancaria.deposito(300);
console.log(deposito);




// 4: Classe Produto
class Produtoo {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }
}
let produto = new Produtoo('Rosa', 100);
console.log(produto);




// 5: Classe Carro
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }

    dirigir() {
        console.log(`O carro ${this.modelo} está sendo dirigido.`);
    }
}
let carro = new Carro('Palho');
let dirigir = carro.dirigir();
console.log(dirigir);



// 6: Classe Aluno
class Aluno {
    constructor(nome, serie) {
        this.nome = nome;
        this.serie = serie;
    }

    estudar() {
        console.log(`${this.nome} está estudando na série ${this.serie}.`);
    }
}

let aluno = new Aluno('Rosa', '6°');
let estudar = aluno.estudar();
console.log(estudar);




// 3 - Desafio aluno
// DESAFIO: Sistema de Cálculo Trabalhista
// Passe o sistema de calculo trabalhista para o paradigma de programação a objetos.
// calcule a hora do colaborador
// calcule a hora extra
// calcule a quantidade de hora extra
// faça o calculo do salário mais a extra

let horaExtra;

class DesafioSalario {
    constructor(valorHora, horaTrabalho, horaExtra) {
        this.valorHora = valorHora;
        this.horaTrabalho = horaTrabalho;
        this.horaExtra = horaExtra;
    }
    salario_comum() {
        let salarioBase = this.horaTrabalho * this.valorHora;
        console.log('Salário: ' + salarioBase);
    }
    valor_extra(horaExtra) {
        let salarioBase = this.horaTrabalho * this.valorHora;
        let salarioExtra = this.horaExtra * (this.valorHora / 2);
        let salarioTotal = salarioBase + salarioExtra;
        console.log('Salário com extra: ' + salarioTotal);

    }
}
let dados = new DesafioSalario(15, 8, 4);
let temExtra = 's'
if (temExtra === 'n') {
    let salarioBase = dados.salario_comum()
    console.log('Salário: ' + salarioBase);

}

if (temExtra === 's') {
    // horaExtra = Number(prompt("Quantas horas extras fez?"));
    console.log('Salário com extra: ' + dados.valor_extra(horaExtra));
}






// 4 - Monte um sistema de carrinho de compras de um e-commerce.
// #DESAFIO:Sistema de mercado
// Classe Produto com nome e preco.
// Classe Carrinho que pode:
// adicionarProduto(produto)
// removerProduto(nome)
// mostrarCarrinho()
// calcularTotal()
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nome) {
        this.produtos = this.produtos.filter(p => p.nome !== nome);
    }

    mostrarCarrinho() {
        console.log("Carrinho: " + this.produtos);
        this.produtos.forEach(p => {
            console.log(p.nome + " - R$" + p.preco);
        });
    }

    calcularTotal() {
        let total = 0;
        this.produtos.forEach(p => {
            total += p.preco;
        });
        console.log("Total: R$" + total);
    }
}

let rosa = new Produto('Rosa', 60);
let manga = new Produto('Manga', 10);
let carrinho = new Carrinho();
carrinho.adicionarProduto(rosa);
carrinho.adicionarProduto(manga);
carrinho.removerProduto('Rosa');
carrinho.mostrarCarrinho();
carrinho.calcularTotal();