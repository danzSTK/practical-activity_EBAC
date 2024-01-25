const form = document.getElementById('form-contato');
let contatos = [];
let numero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaLista();
})

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já está incluso na sua lista`)
    }else{
        contatos.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));
        
        let teste = parseFloat(inputNumeroContato.value)
        let linha = '<tr>';
        linha += '<td><i class="fa-solid fa-id-card"></i></td>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }

}

function atualizaLista(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}