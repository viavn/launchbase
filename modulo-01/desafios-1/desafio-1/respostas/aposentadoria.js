const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23; // em anos

const tempoContribuicao = idade + contribuicao; // 71

let podeAposentar = false;

if (sexo === 'F') {
    podeAposentar = contribuicao >= 30 || tempoContribuicao >= 85;
} else {
    podeAposentar = contribuicao >= 35 || tempoContribuicao >= 95;
}

const message = podeAposentar
    ? `${nome}, você pode se aposentar!`
    : `${nome}, você ainda não pode se aposentar!`;

console.log(message);