// quando criamos uma função no typescript, temos que declarar o tipo de cada argumento dessa função, se vai ser number ou bolean etc 

// também temos que declara qual vai ser o tipo de dado que vai sair da function e se caso a mesma não retorne valor nenhuma, deve ser declarado o type (void)
function calculaArea(base: number, altura: number): number{
    return base * altura
}

// da mesma forma para o tipo arrow funciton
const calculaArea2 = (base: number, altura: number): number => base * altura 

function somar(...numeros: number[]): void{
    console.log(numeros)
}

// assim como nas variaveis, também podemos declarar dois tipos de saida de dados   
function teste(): string | number{
    if(10 > 5){
        return 'dez é maior que cinco'
    } else return 5 
}