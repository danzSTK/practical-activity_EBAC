function soma(a, b) {
    return a + b
};

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a , b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

console.log(soma(5, 5))

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}