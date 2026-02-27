// Exercícios com Loops for, while e Listas (Arrays) em JavaScript

// Exercícios com Loop for
// // 1 Contagem de 1 a 10

document.getElementById('A1').addEventListener('click', function () {
    for (let contagem = 1; contagem <= 10; contagem++) {
        console.log(contagem);
    }
})


// 2 Números pares de 0 a 20
document.getElementById('A2').addEventListener('click', function () {
    for (let pares = 0; pares <= 20; pares++) {
        if (pares % 2 == 0) {
            console.log(pares)
        }
    }
})

// 3 Tabuada do 5
document.getElementById('A3').addEventListener('click', function () {
    for (tabuada = 0; tabuada <= 10; tabuada++) {
        console.log(tabuada * 5)
    }
})

// 4 Imprimir elementos de um array
document.getElementById('A4').addEventListener('click', function () {
    let frutas = ['Maça','Morango','Laranja','Melancia']

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
})

// 5 Soma de números de 1 a 100

document.getElementById('A5').addEventListener('click', function () {
    let num = 0;
    for (let soma = 1; soma <= 100; soma++) {
        num = num + soma
    }
    console.log('A soma de 1 a 100 é ' + num)
})


// Exercícios com Loop while

// 6 Contagem regressiva de 10 a 1

document.getElementById('A6').addEventListener('click', function () {
    let numero = 10;
    while (numero >= 1) {
        console.log(numero);
        numero = numero - 1;
    }
})
// 7 Adivinhe o número (1 a 10)
document.getElementById('A7').addEventListener('click', function(){
    let sorteado = Math.floor(Math.random()*11);
    console.log(sorteado);
    let adivinhado = '';
    let vida = 3;
    while(vida >= 1 && adivinhado != sorteado){
        adivinhado = parseFloat(prompt('Você tem três chances de acertar o valor. Qual você acha que é?'));
        if(adivinhado != sorteado && vida > 1){
            vida = vida-1;
            alert('Esse não é o número certo! Resta apenas ' + vida + ' de vida.');
        } else if(adivinhado != sorteado && vida === 1){
            vida = vida-1;
            alert('Esse não é o número certo e essa era sua última chance!');
        }
    }
    if(adivinhado === sorteado){
            alert('Parabéns você acertou!!');
    }
})

// 8 Soma até digitar 0
document.getElementById('A8').addEventListener('click', function () {
    let soma = Number(prompt('Qual valor você que somar?'))
    let total = 0;
    while (s !== 0) {
        total = total + s;
        soma = Number(prompt('Qual valor você quer soma? (Quando quiser o resultado, digite 0 (zero))'))
    }
    alert(total)
})

// 9 Percorrendo array com while

document.getElementById('A9').addEventListener('click', function () {
    let divisores = [0, 5, 10, 15, 20, 25, 30, 35, 40]
    let numLista = 0;
    while (numLista < divisores.length) {
        console.log(divisores[h]);
        numLista = numLista + 1;
    };
})
