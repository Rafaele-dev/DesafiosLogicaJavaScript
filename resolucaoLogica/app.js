
// 11. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
  alert('Bom fim de semana!');
} else {
  alert('Boa semana!');
}

// 12. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDeVendas = prompt('Digite um número.')

if (numeroDeVendas == 0 ) {
    alert('O numéro é 0.');
} else if (numeroDeVendas > 0) {
    alert('O número' + numeroDeVendas + 'é positivo.');
} else {
        alert('O número' + numeroDeVendas + 'é negativo.');
    }

// 13. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Digite sua pontuação.');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// 14. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = prompt('Digite o saldo do usuário:');

alert(`O seu saldo atual é de ${saldo}`);


// 15. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt('Insira seu nome.');
alert(nomeUsuario);
