//rest operador

function somar(){
    let soma = 0;

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    } 

    return soma
};

console.log(somar(10, 20, 30,))


function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual

        return total
    })

    return soma
}


console.log(somarComRest(10, 20, 30))

// spreed

const numeros = [1, 2, 3, 4]

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDeRj = ['vasco', 'botafogo', 'flamengo', 'fluminense'];


const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDeRj];

console.log(timesDeFutebol)


const carroDaJulia = {
    modelo: 'gol',
    fabricante: 'vw',
    motor: 1.6
}


const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}


console.log(carroDaAna)



// desestruturação

const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log()

