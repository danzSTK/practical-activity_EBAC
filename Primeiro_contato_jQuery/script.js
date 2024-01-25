
const links = []
$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').submit(function(e){
        e.preventDefault()

        const enderecoNovaImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display:none"></li>');
        
        if(links.includes(enderecoNovaImagem)){
            alert('Essa imagem já foi inserida');
        }else{
            links.push(enderecoNovaImagem)
            $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
            $(`
                <div class="overlay-imagem-link">
                    <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                        Ver imagem em tamanho real
                    </a>
                </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $('#endereco-imagem').val('');
            $(novoItem).fadeIn()
        }
        })
})


