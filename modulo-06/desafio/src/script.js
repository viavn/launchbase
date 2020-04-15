const min = 1;
const max = 100;

// Este exemplo retorna um número inteiro entre dois valores definidos.
// O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro),
// e será menor (mas não igual) a max.
/* Math.floor(Math.random() * (100 - 1)) + 1; */


// Implemente uma função que receba como parâmetro um número e, após x milissegundos 
// (dentre um intervalo de 1 a 100 ms. Utilize o setTimeout e as funções floor e random da biblioteca Math),
// mostre no console o dobro do parâmetro recebido. Em seguida, chame essa função 5 vezes.
function dobro1(value) {
    const ms = Math.floor(Math.random() * (max - min)) + min;

    setTimeout(() => {
        console.log(`dobro1: ${value * 2}`)
    }, ms)
}

// for (let i = 1; i <= 5; i++) {
//     dobro1(i);
// }

// Callback hell
function dobro2(value, callback) {
    const ms = Math.floor(Math.random() * (max - min)) + min;

    setTimeout(() => {
        console.log(`dobro2: ${value * 2}`);
        if (callback) callback()
    }, ms);
}

// dobro2(2, () => dobro2(4, () => dobro2(6)))

// Promise hell
function dobro3(value) {
    const ms = Math.floor(Math.random() * (max - min)) + min;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`dobro3: ${value * 2}`)
        }, ms);
    })
}

// let result = dobro3(2)
// result.then((r) => console.log(r))

// result = dobro3(4)
// result.then((r) => console.log(r))

// result = dobro3(6)
// result.then((r) => console.log(r))

// ASYNC / AWAIT
async function dobro4(value) {
    const ms = Math.floor(Math.random() * (max - min)) + min;

    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`dobro3: ${value * 2}`)
        }, ms);
    })

    return result
}

// (async () => {
//     console.log(await dobro4(2))
//     console.log(await dobro4(4))
//     console.log(await dobro4(6))
//     console.log(await dobro4(8))
//     console.log(await dobro4(10))
// })()

async function dobro5(value, soma) {
    const ms = Math.floor(Math.random() * (max - min)) + min;

    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2 + soma)
        }, ms);
    })

    return result
}

(async () => {
    let result

    result = await dobro5(5, 0)
    result = await dobro5(12, result)
    result = await dobro5(2, result)
    console.log(result)
})()