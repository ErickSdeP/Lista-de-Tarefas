console.log('Hello world')
const main = document.getElementById("main")
const input = document.getElementById("addTarefa")
const adicionar = document.getElementById("adicionar")
const lista = document.querySelector(".tarefaT");
const footer = document.querySelector("footer");


function adicionarTarefa() {
    const texto = input.value;

    if (texto === "") {
        return;
    }

    input.focus();
    input.value = "";

    let ul = document.querySelector(".tarefas");

    if (!ul) {
        ul = document.createElement("ul");
        ul.className = "tarefas";
        lista.appendChild(ul);
    }

    let subTitulo = document.querySelector(".subTitle");
    if (!subTitulo) {
        subTitulo = document.createElement("div");
        main.insertBefore(subTitulo, lista);
        subTitulo.className = "subTitle";

        const h3 = document.createElement("h3");
        subTitulo.appendChild(h3);
        h3.textContent = "Em espera"
    }

    const li = document.createElement("li");
    ul.appendChild(li);
    li.className = "tarefa";

    const conteudo = document.createElement("div")
    li.appendChild(conteudo);
    conteudo.className = "conteudo";

    const checkbox = document.createElement("input")
    conteudo.appendChild(checkbox)
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    conteudo.appendChild(span)
    span.textContent = texto;

    const excluir = document.createElement("button");
    li.appendChild(excluir);
    excluir.type = "button";

    const del = document.createElement("img");
    excluir.appendChild(del)
    del.src = "Svgs/Lixo.svg"
    del.alt = "excluir"

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            console.log("Concluída");
        } else {
            console.log("Não concluída");
        }
    });


    excluir.addEventListener("click", () => {
        li.remove();
        if (ul.children.length === 0) {
            ul.remove();
            subTitulo.remove();
        }
    })
}
adicionar.addEventListener("click", adicionarTarefa);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});