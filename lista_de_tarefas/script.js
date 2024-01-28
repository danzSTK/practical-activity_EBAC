const form = document.getElementById('form');



$(document).ready(function(){
    $(form).submit(function(e){
        e.preventDefault()

        const nomeAtividade = $('#nome-tarefa').val()
        $(`<li><button onclick="addTask(this)" type="submit">${nomeAtividade}</button></li>`).appendTo('#tarefa-lista')
    
    })
})

function addTask(task){
    $(task).toggleClass('underline')
}














