const sec = 1000;
const min = 60 * sec;
const hr = 60 * min;
const day = hr * 24;

let intervalID;
let finish;

if(localStorage.getItem("timer") != null){
    finish = localStorage.getItem("timer");
    intervalID = setInterval(refresh, 1000);
    refresh();
}

function start(){
    const date = document.getElementsByTagName("input")[0].value;

    finish = new Date(date).getTime() + (3*hr);

    intervalID = setInterval(refresh, 1000);
    localStorage.setItem("timer", finish);
}

function refresh(){
    const now = new Date().getTime();
    let countdown = finish - now;

    let d = Math.floor(countdown / day);
    let h = Math.floor((countdown%day) / hr);
    let m = Math.floor((countdown%hr) / min);
    let s = Math.floor((countdown%min) / sec);

    let time = `${d}d\n${h}h${m}m${s}s`;

    document.getElementsByTagName("h1")[0].innerHTML = time;
}

function stop() {
    document.getElementsByTagName("h1")[0].innerHTML = "⌚";
    clearInterval(intervalID);
    localStorage.removeItem("timer");
}