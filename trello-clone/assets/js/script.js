var transfer = 0;

function addCard(elemento) {
    //console.log(elemento);
    const text = prompt("Qual é a tarefa?");
    //elemento.appendChild(createTemplate(text));
    
    const task = `
    <li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)">
        <p>${text}</p>
        <p class="remove" onclick="this.parentNode.remove()">x</p>
    </li>`;
    elemento.innerHTML = elemento.innerHTML + task;

    //console.log(elemento);
}

function drag(event) {
    //transfer = id;
    //transfer = 1;
    event.dataTransfer.setData("card", event.target.id);
}

function over(event) {
    event.preventDefault();
}

function drop(event, target) {
    event.preventDefault();

    const data = event.dataTransfer.getData("card");
    const card = document.getElementById(data);
    target.appendChild(card);
}

function createTemplate(text){
    const task = document.createElement("p");
    task.innerHTML = text;
    //console.log(task);

    const remove = document.createElement("p");
    remove.classList.add("remove");
    remove.innerHTML = "x";
    //console.log(remove);

    const element = document.createElement("li");
    element.appendChild(task);
    element.appendChild(remove);
    //console.log(element);

    return element;
}

function addCardInit(elemento, text, id) {
    const task = `
    <li id="${id}" draggable="true" ondragstart="drag(event)">
        <p>${text}</p>
        <p class="remove" onclick="this.parentNode.remove()">x</p>
    </li>`;
    elemento.innerHTML = elemento.innerHTML + task;
}

const init = document.getElementsByTagName("ul");
addCardInit(init[0], "acordar", 1);
addCardInit(init[0], "ver tv", 2);
addCardInit(init[1], "cochilar", 3);
addCardInit(init[1], "almoçar", 4);
addCardInit(init[2], "jantar", 5);
addCardInit(init[2], "dormir", 6);