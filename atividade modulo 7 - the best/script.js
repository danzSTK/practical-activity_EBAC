const anoBase = document.getElementById('anoBase');
const anoFinal = document.getElementById('anoFinal');
const card = document.getElementById('card-login');
//let inputEvalido = false


function validaCalculo(anoBase){
    let anoMenor = anoFinal.value - anoBase.value;
    console.log(anoMenor)
    return  anoMenor > 0;
}
function calculaAno(anoBase,anoFinal){
    let valorFinal =  anoFinal - anoBase;
    return valorFinal;
}


card.addEventListener('submit', function(e){
    e.preventDefault();
    
    let valor = calculaAno(anoBase.value,anoFinal.value)
    let mensagemSucesso =`ano ${anoBase.value} foi a ${valor} anos`;
    let mensagemErro = `o campo Ano Final deve ter um valor superior ou Ano base`;
    let inputEvalido = validaCalculo(anoBase)
    
    if(!inputEvalido){
        let containerMesagemErro = document.querySelector('.mensagem-Erro');
        let containerAnoFinal = document.querySelector('#anoFinal');

        containerAnoFinal.style.border = '2px solid #ff0000'
        containerAnoFinal.style.outline = '2px solid #ff0000'
        containerMesagemErro.innerHTML = mensagemErro;
        containerMesagemErro.style.display = 'block'
        anoFinal.value ='';
    }else{
        let containerMesagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMesagemSucesso.innerHTML = mensagemSucesso;

        containerMesagemSucesso.style.display = 'block';

        anoFinal.value = ''
        anoBase.value = ''
    }
})