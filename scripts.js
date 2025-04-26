const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push(input.value)

    mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = ''


    


//   <li class="task">
//    <img src="./img/check.png" alt="check">
//   <p>Fazer algo</p>
//    <img src="./img/lixeira.png" alt="lixeira">
//    </li> 

}


button.addEventListener('click', adicionarNovaTarefa)
