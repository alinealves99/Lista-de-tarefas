import gerarDiaSemana from "./gerarData.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemLista(){

    if (inputItem.value === "") {
        alert("Por favor, insira uma tarefa!");
        return
    }

    const itemLista = document.createElement("li");

    const divItemLista = document.createElement("div");
    divItemLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox,this.checked){
            nomeItem.style.textDecoration = "line-through";
        } else{
            nomeItem.style.textDecoration = "none";
        }
    })

    const dataCompleta = gerarDiaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    divItemLista.appendChild(itemData);
    divItemLista.appendChild(inputCheckbox);
    divItemLista.appendChild(nomeItem);

    itemLista.appendChild(divItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}