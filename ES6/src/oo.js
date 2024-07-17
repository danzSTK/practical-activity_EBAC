class Pokemon {
    #hp = 100;
    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque(){
        this.#hp -= 10;
    }

    exibeHP(){
        console.log(this.hp)
    }
};

class Pikachu extends Pokemon{
    constructor(){
        super('pikachu', 'eletrico')
    }
    
    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu('pikachu', 'eletrico');
const pikachu = new Pokemon('pikachu', 'eletrico');

console.log(pikachu)
console.log(pikachuDoAsh)

// fazendo comparaçoes e vendo se tal propriedade é uma instancia de tal class 
console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)

