//  Atividade 1: Função de Saudação Personalizada
//  Crie uma função chamada saudacao que recebe um nome e um horário
//  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.

let nome = "a";
let horario = "b";
function saudacao(nome, horario) {
    nome = prompt("Qual o seu nome?");
    horario = prompt("Oi " + nome + ". \n\ Agora está de manhã, tarde ou noite?");
    if (horario === 'manhã' || horario === 'Manhã' || horario === 'manha' || horario === 'Manha') {
        console.log('Bom dia, ' + nome);
    } else if (horario === 'tarde' || horario === 'Tarde') {
        console.log('Boa tarde, ' + nome);
    } else if (horario === 'noite' || horario === 'Noite'){
        console.log('Boa noite, ' + nome);
    }
}

//  Atividade 2: Calculadora Simples
//  Crie uma função calculadora que recebe dois números e uma operação 
// ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.
let n1 = 6;
let n2 = 6;
let resultado = 3;
function calcular(n1, n2) {
    n1 = Number(prompt('Qual o valor 1?'));
    n2 = Number(prompt('Qual o valor 2?'));
    let operacao = prompt('Digite: soma, subtracao, divisao ou multiplicacao');
    if (operacao == 'soma') {
        resultado = n1 + n2;
        console.log('Resultado: ' + resultado);
    } else if (operacao == 'subtracao') {
        resultado = n1 - n2;
        console.log('Resultado: ' + resultado);
    } else if (operacao == 'multiplicacao') {
        resultado = n1 * n2;
        console.log('Resultado: ' + resultado);
    } else if (operacao == 'divisao') {
        resultado = n1 / n2;
        console.log('Resultado: ' + resultado);
    } else {
        console.log('Operação inválida');
    };
}



//  Atividade 3: Validador de Senha -  Utilize variáveis globais.
//  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8 
// caracteres, contém pelo menos um número e uma letra maiúscula.


function validarSenha() {
    let senha = prompt('Qual é a senha?');
    let temTamanhoMinimo = senha.length >= 8;
    let temNumero = false;
    let temMaiuscula = false;

    for (let i = 0; i < senha.length; i++) {
        let caractere = senha[i];

        // Verifica se é número
        if (caractere >= '0' && caractere <= '9') {
            temNumero = true;
        }

        // Verifica se é letra maiúscula
        if (caractere >= 'A' && caractere <= 'Z') {
            temMaiuscula = true;
        }
    }

    if (temTamanhoMinimo && temNumero && temMaiuscula) {
        alert("Senha válida!");
    } else {
        alert("Senha inválida!");
    }
}




//  Atividade 4: Gerador de Tabuada utilize variáveis locais. 
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.

function gerarTabuada(){
    let valor = Number(prompt("Qual a tabuada?"));
    for(let l = 1;l<=10;l++){
        let resposta = l*valor;
        console.log(valor + 'x' + l + '=' + resposta);
    }
}

// // Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
// 1 -  O usuario precisa digitar o peso e a idade
// 2 -  O sistema precisa fazer o calculo
// 3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
// Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3. 

function IMC(peso, idade){
    peso = parseFloat(prompt('Qual seu peso?'));
    idade = Number(prompt('Qual sua idade?'));
    altura = parseFloat(prompt('Qual sua altura?'));
    let resposta = peso/(altura*altura);
    console.log(resposta)

    if (resposta <= 18.5) {
        console.log('Seu IMC é ' + resposta + '. Sua classificaçaõ é desnutrição.');
    } else if (resposta > 18.5 && resposta <= 24.9) {
        console.log('Seu IMC é ' + resposta + '. Sua classificaçaõ é normal.');
    } else if (resposta > 24.9 && resposta <= 29.9) {
        console.log('Seu IMC é ' + resposta + '. Sua classificaçaõ é obesidade 1.');
    }  else if (resposta > 29.9 && resposta <= 39.9) {
        console.log('Seu IMC é ' + resposta + '. Sua classificaçaõ é obesidade 2.');
    }  else if (resposta > 39.9) {
        console.log('Seu IMC é ' + resposta + '. Sua classificaçaõ é obsedidade 3.');
    }  else if (resposta > 18.5 && resposta <= 24.9) {
        console.log('Esses dados são invalidos.');
    } 
}


// // DESAFIO JAVA SCRIPT
// // CRIE UM SISTEMA DE CALCULO TRABALHISTA
// 1 -  descubra o valor hora do trabalhador
// 2 -  aplique uma função hora extra 50%
// 3 -  aplique uma função o calculo da quantidade de horas extra que foi realizada x extra
// 4 -  aplique uma outra função que some o salário mais as extras
// 5 -  mostre o total a receber  

function desafio(){
    let horaTrabalho = parseFloat(prompt("Quanto recebe por hora?"));
    let valorHora = Number(prompt("Quantas horas trabalhou?"));
    let temExtra = prompt("Fez hora extra? (s/n)");
    
    function Salario(horaTrabalho, valorHora){
        return horaTrabalho*(valorHora/2);
    }

    function Extra(valorHora){
        let extra = parseFloat(prompt('Quantas horas trabalho de extra?'));
        return extra*valorHora;

    }
    
    let salarioBase = Salario(horaTrabalho, valorHora);

    if(temExtra === 'n'){
        console.log('Salário: ' + salarioBase);
    }
    
    if(temExtra ==='s'){
       let extra = Extra(valorHora);
       let salarioTotal = salarioBase + extra;
       console.log('Salario com extra: ' + salarioTotal);
    }
}

