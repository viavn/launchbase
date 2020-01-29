const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23; // em anos

const tempoContribuicao = idade + contribuicao; // 71

// Homem para se aposentar precisa de no mínimo 35 anos de contribuição
// Mulher para se aposentar precisa de no mínimo 30 anos de contribuição

let message;

if (sexo === 'F') {
    if (contribuicao >= 30 || tempoContribuicao >= 85) {
        message = `${nome}, você pode se aposentar!`;
    } else {
        message = `${nome}, você ainda não pode se aposentar!`;
    }
} else {
    if (contribuicao >= 35 || tempoContribuicao >= 95) {
        message = `${nome}, você pode se aposentar!`;
    } else {
        message = `${nome}, você ainda não pode se aposentar!`;
    }
}

console.log(message);