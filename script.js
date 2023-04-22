let screenOne = document.querySelector(".screenOne");
let screenSecond = document.querySelector(".screenSecond");

screenOne.addEventListener("click", screenNone);
screenSecond.addEventListener("click", screenDisable);

function screenNone() {
    

    screenOne.classList.toggle("hide");
    screenSecond.classList.toggle("hide");
}

function screenDisable() {
    
    screenSecond.classList.toggle("hide");
    screenOne.classList.toggle("hide");
    
}
