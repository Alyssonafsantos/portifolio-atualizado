let btnMenu = document.getElementById('btn-menu');
let btnFechar = document.getElementById('btn-fechar');
let menuLateral = document.getElementById('cabecalho-lista')

btnMenu.addEventListener("click", ()=>{
    menuLateral.classList.add("aparecer");
    btnMenu.classList.add("esconder");
})

menuLateral.addEventListener("click", ()=>{
    menuLateral.classList.remove("aparecer");
    btnMenu.classList.remove("esconder");
})