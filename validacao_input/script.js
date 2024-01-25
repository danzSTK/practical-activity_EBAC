const form = document.getElementById('form');
const nomeBeneficiario = document.getElementById('nome-Beneficiario');
let formEvalido = false;



function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const contaBeneficiario = document.getElementById('numero-Conta');
    const valorDeposito = document.getElementById('valor');
    let mensagemSucesso = `O valor depositado foi de <b>${valorDeposito.value}</b> para o <b>${nomeBeneficiario.value}</b> - conta:<b>${contaBeneficiario.value}</b>`

    formEvalido = validaNome(nomeBeneficiario.value);
    if(formEvalido){
        let ContainerMessageSucesso = document.querySelector('.message-sucess');
        ContainerMessageSucesso.innerHTML = mensagemSucesso;
        ContainerMessageSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        contaBeneficiario.value = '';
        valorDeposito.value = '';
    }else{
        nomeBeneficiario.style.border = '2px solid red'
        document.querySelector('.message-erro').style.display = 'block'
    }
    
})

nomeBeneficiario.addEventListener('keyup', function(e){
    formEvalido = validaNome(e.target.value);
    if(!formEvalido){
        nomeBeneficiario.style.border = '2px solid red';
        document.querySelector('.message-erro').style.display = 'block';
    }else{
        nomeBeneficiario.style.border = 'none';
        document.querySelector('.message-erro').style.display = 'none';
    }

})


