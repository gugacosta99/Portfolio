function disparaZap(elemento) {
    //console.log(elemento.childNodes[1].innerHTML);

    let num = document.forms["insertNum"]["num"].value;

    let msg = elemento.childNodes[0].innerHTML;
    //msg = "boa noite";
    //elemento.childNodes[1].innerHTML = msg;
    console.log(msg);

    let zapLink = "https://api.whatsapp.com/send?phone=" + num + "&text=" + msg;

    if(num == ""){
        alert("Digite um número!");
    } else {
        window.open(zapLink);
        //console.log(elemento.childNodes)
    }
}

function addMsg(select, msgIn) {
    let msg;

    if(select){
        msg = msgIn;
    } else {
        msg = document.forms["insertMsg"]["msg"].value;
    }

    const newDiv = document.createElement("div");
    newDiv.setAttribute("onclick", "disparaZap(this)");

    const newP = document.createElement("p");
    newP.innerHTML = msg;

    const newImg = document.createElement("img");
    newImg.classList.add("zapLogo");
    newImg.setAttribute("src", "./assets/img/zap_icon.png");

    const newDel = document.createElement("img");
    newDel.classList.add("del");
    newDel.setAttribute("onclick", "delMsg(this)");
    newDel.setAttribute("src", "./assets/img/x.png");

    newDiv.appendChild(newP);
    newDiv.appendChild(newImg);
    //newDiv.appendChild(newDel);

    const main = document.getElementById("main");
    if(msg == ""){
        alert("Digite uma mensagem!");
    } else {
        main.appendChild(newDiv);    
    }
    
}

function delMsg(elemento) {
    elemento.parentNode.parentNode.removeChild(elemento.parentNode);
}

function setDelMode() {
    delMode = !delMode;
}

let delMode = false;

addMsg(true, "Bom dia, luz do dia!");
addMsg(true, "Vamos marcar sim, a gente vai se falando");
addMsg(true, "Oiiiiii bb, saudades rsrsrsrs");
addMsg(true, "O que vc vai fazer hoje? Nada? Que tal fazermos nada juntos?");
addMsg(true, "Agora é oficial, eu te amo");