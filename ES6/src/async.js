function funcaoMuitoPesada(){
    let valor = 0
    for(let i = 0; i < 1000000000; i++){
        valor++
    }
    return valor
}

// criando uma promisse como funçao asicrona como a fetch api tbm
const funcaoMuitoPesadaPromise =  new Promise((resolve, reject) => {
    try{
        let valor = 0
        for(let i = 0; i < 1000000000; i++){
        valor++
        }
        resolve(valor)
    } catch(e){
        reject(e)
    }
})



//agora vou lhe mostrar como transformar essa funçao asicrona novamente


// criando promise com argumentos

const promiseComParametros =  (login, senha) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Logado com o usuário: ${login}`)
    }, 3000)
})

async function execucaoPrincipal(){
    console.log('inicio');

    try{
        const resultado = await promiseComParametros('daniel', 123456);
        console.log(resultado)
    }catch(e){
        console.log(e)
    }

    await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    console.log('fim');
};

execucaoPrincipal();