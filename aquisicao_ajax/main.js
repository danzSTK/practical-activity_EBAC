/* Meu modo de aquisição com js puro */
/* document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn__buscar__cep').addEventListener('click', function(){
        
        const xhttp = new XMLHttpRequest();
        const cep = validaCep(document.getElementById('cep').value);
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const destinoDados = document.getElementById('endereco');
        const button = this
        const icone = button.querySelector('i');
        const loadingicone = button.querySelector('span');

        inicia();

        
        function validaCep(valor){
            const cepLimpo = valor.replace(/\D/g, '');

            return String(cepLimpo)
        };
        function iniciaDownLoading(){
            icone.classList.add('d-none');
            loadingicone.classList.remove('d-none');
            destinoDados.value = '...'
        };

        function finalizaDownLoading(){
            icone.classList.remove('d-none');
            loadingicone.classList.add('d-none')
        };
        function limpaCampo(){
            document.getElementById('cep').value = '';
        }
        function inicia(){
            if(cep == ''){
                alert("Por favor, informe o CEP");
                limpaCampo()
                return
            }
            if(cep.length !== 8){
                alert("Por favor, insira um CEP Válido");
                limpaCampo()
                return
            } 
            if(cep === undefined){
                alert('Invalido')
                limpaCampo()
                return
            }
            iniciaRequisicao()
        }


        function iniciaRequisicao(){
            xhttp.open('GET', endPoint, true);
            iniciaDownLoading();
            
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState === 4 && xhttp.status === 200){
                    let resposta = xhttp.responseText;
                    try{
                        let dados = JSON.parse(resposta);

                        const bairro = dados.bairro;
                        const municipio = dados.localidade;
                        const estado = dados.uf;
                        const rua = dados.logradouro;
                        const ddd = dados.ddd;
    
                        destinoDados.value = `${rua}, ${bairro} - ${municipio} - ${estado}`
                    } catch(e){
                        console.error("Erro ao converter dados JSON", e);
                        return
                    }
                    finalizaDownLoading();
                } else{
                    console.error("Erro na solicitação. Código de status:", xhttp.status);
                    finalizaDownLoading();
                }
            }

            setTimeout(function(){
                xhttp.send()
            }, 4000)
        }

    })
});
 */

/* document.addEventListener('DOMContentLoaded', function(){                          
    
    document.getElementById('btn__buscar__cep').addEventListener('click',function(){
        // AJAX - Asycrhronous JavaScript and XML 
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        
        xhttp.open('GET', endPoint);
        xhttp.send();
        
        //https://viacep.com.br/ws/12312121/json
    })
}) */

/* Feito com jQuery */
$(document).ready(function(){
    $('#cep').mask('00000-000')
    $('#btn__buscar__cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const button = $(this)
        $(button).find('i').addClass('d-none');
        $(button).find('span').removeClass('d-none');

        $.ajax(endPoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
            $('#endereco').val(endereco)

            setTimeout(function(){
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            }, 4000)
        })
    })
})

