const btn = document.getElementById("botao-alterar-tema");
const body = document.getElementById("body");


btn.addEventListener("click",() =>{
    body.classList.toggle("modo-escuro")
})
