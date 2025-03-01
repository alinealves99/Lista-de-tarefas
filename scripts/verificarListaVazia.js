const mensagemListavazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaTarefas){
    const itensLista = listaTarefas.querySelectorAll("li");
    if(itensLista.length===0){
        mensagemListavazia.style.display="block";
    } else{
        mensagemListavazia.style.display="none";
    }
}

export default verificarListaVazia;