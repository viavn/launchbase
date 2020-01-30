const usuarios = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

// for (let index = 0; index < usuarios.length; index++) {
//     const usuario = usuarios[index];
//     const saldoTotal = calculaSaldo(usuario.receitas, usuario.despesas);
//     const situacaoSaldo = saldoTotal >= 0 ? 'POSITIVO' : 'NEGATIVO';
//     console.log(`${usuario.nome} possui saldo ${situacaoSaldo} de ${saldoTotal}`);
// }

usuarios.forEach((usuario) => {
    const saldoTotal = calculaSaldo(usuario.receitas, usuario.despesas);
    const situacaoSaldo = saldoTotal >= 0 ? 'POSITIVO' : 'NEGATIVO';
    console.log(`${usuario.nome} possui saldo ${situacaoSaldo} de ${saldoTotal}`);
});

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);

    return somaReceitas - somaDespesas;
}

function somaNumeros(numeros) {
    // let soma = 0;
    // for (let index = 0; index < numeros.length; index++) {
    //     soma += numeros[index];
    // }    

    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    return soma;
}