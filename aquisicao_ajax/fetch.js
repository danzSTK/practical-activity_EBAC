document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn__buscar__cep').addEventListener('click', function(){

        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const destinoDados = document.getElementById('endereco');
        const button = this
        const icone = button.querySelector('i');
        const loadingicone = button.querySelector('span');

        function iniciaDownLoading(){
            icone.classList.add('d-none');
            loadingicone.classList.remove('d-none');
            destinoDados.value = '...'
        };

        function finalizaDownLoading(){
            icone.classList.remove('d-none');
            loadingicone.classList.add('d-none')
        };

        fetch(endPoint).then(function(resposta){
            iniciaDownLoading()
            console.log(resposta)
            return resposta.json()
        })
            .then(function(json){
                
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf 
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
                document.getElementById('endereco').value = endereco
            })
            .catch(function(erro){
                alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde!");
            })
            .finally(function(){
                setTimeout(()=>{
                    finalizaDownLoading()
                }, 2000)
            })
    })

    $('#formulario__pedido').submit(function(evento){
        evento.preventDefault();
        if($('#nome').val().length == 0 ){
            throw new Error('Digite o nome.');
        }
    })
})