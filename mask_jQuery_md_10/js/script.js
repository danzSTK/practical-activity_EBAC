$('#phone').mask('(00) 00000-0000');
$('#cep').mask('00000-000');
$('#cpf').mask('000.000.000-00');

$('form').submit(function(e){
    e.preventDefault();

    $('input').val('')
})