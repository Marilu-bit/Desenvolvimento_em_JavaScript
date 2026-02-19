// // Atividade 1
document.getElementById('A1').addEventListener('click', function () {
    numero = prompt('Digite o valor: ')

    if (numero < 0) {
        alert('Esse número é negativo.')
    } else if (numero > 0) {
        alert('Esse número é positivo.')
    } else {
        alert('Esse é o número 0.')
    }
})




// // Atividade 2
document.getElementById('A2').addEventListener('click', function () {
    idade = prompt('Qual a sua idade?');

    if (idade >= 18) {
        alert('Você já pode votar.')
    } else {
        alert('Você ainda não pode votar.')
    }
})


// // Atividade 3
document.getElementById('A3').addEventListener('click', function () {

    numero = prompt('Digite o valor: ')

    if (numero % 2 == 0) {
        alert('Esse valor é par.')
    } else {
        alert('Esse valor é impar.')
    }
})


// // Atividade 4
document.getElementById('A4').addEventListener('click', function () {
    l1 = prompt('Qual o valor do primeiro lado?');
    l2 = prompt('Qual o valor do segundo lado?');
    l3 = prompt('Qual o valor do terceiro lado?');

    if (l1 == l2 && l2 == l3) {
        alert('Esse é um triângulo equilátero.');
    } else if (l1 != l2 && l2 != l3 && l1 != l3) {
        alert('Esse é um triângulo escaleno.');
    } else {
        alert('Esse é um triângulo isósceles.');
    }
})


// // Atividade 5
document.getElementById('A5').addEventListener('click', function () {

    numero = prompt('Digite o valor: ')

    if (numero % 8 == 0 && numero % 16 == 0) {
        alert('Esse número é multiplo de 8 e de 16.')
    } else {
        alert('Esse valor não é multiplo de 8 e 16.')
    }

})

// // Atividade 6
document.getElementById('A6').addEventListener('click', function () {
    numero = prompt('Digite o valor: ')

    if (numero > 15) {
        alert('Esse valor é positivo e maior que 15.')
    } else if (numero < 0) {
        alert('Esse numero não é positivo.')
    } else if (numero < 15 && numero > 0) {
        alert('Esse valor é menor que 15.')
    }
})

// // Atividade 7
document.getElementById('A7').addEventListener('click', function () {
    numero = prompt('Digite o valor: ')

    if (numero % 9 == 0) {
        alert('Esse número é divisivel por 9.')
    } else if (numero % 6 == 0) {
        alert('Esse número é divisivel por 6.')
    } else {
        alert('Esse número não divisivel por 9 nem 6.')
    }
})


//***Desafio: Sistema de Reservas de Restaurante***

document.getElementById('desafio').addEventListener('click', function () {
    let nome = prompt("Digite o nome: ");
    let quantidade = prompt("São quantas pessoas?");
    let valor = 0;
    let m = 'V';
    if (quantidade <= 4) {
        m = prompt('Qual mesa você você prefere? \n Mesa comum -> Digite C \n Mesa Vip -> Digite V \n Mesa Espaçosa -> Digite E.')
        if (m == 'C' || m == 'c') {
            valor = quantidade * 50;
            alert('Mesa comum. A conta ficou ' + valor)
        } else if (m == 'E' || m == 'e') {
            valor = quantidade * 80;
            alert('Mesa espaçosa. A conta ficou ' + valor)
        } else if (m == 'V' || m == 'v') {
            valor = quantidade * 100;
            alert('Vista externa. A conta ficou ' + valor)
        }
    } else if (quantidade <= 6) {
        m = prompt('Qual mesa você você prefere? \n Mesa Vip -> Digite V \n Mesa Espaçosa -> Digite E.')

        if (m == 'E' || m == 'e') {
            valor = quantidade * 80;
            alert('Mesa espaçosa. A conta ficou ' + valor)
        } else if (m == 'V') {
            valor = quantidade * 100;
            alert('Vista externa. A conta ficou ' + valor)
        }
    } else if (quantidade <= 8) {
        valor = quantidade * 100;
        alert('Para essa quantidade de pessoas, temos a mesa com vista externa. A conta ficou ' + valor)
    }
})



