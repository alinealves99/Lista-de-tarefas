import { criarItemLista } from "./scripts/criarItemLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const botaoAdicionar = document.getElementById("adicionar-item");
const listaTarefas = document.getElementById("lista-de-tarefas");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault;
    const itemLista = criarItemLista();
    listaTarefas.appendChild(itemLista);
    verificarListaVazia(listaTarefas);
})

verificarListaVazia(listaTarefas);