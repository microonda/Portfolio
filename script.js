
window.onscroll = function() {scrollFuncao()};

function scrollFuncao() {
    voltar = document.getElementById("voltar")
    voltar.style.transition = "0.3s";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        voltar.style.display = "block";
    } 
    else {
        voltar.style.display = "none";
    }
}

// Quando o usuário clicar no botão, voltar para o topo da página
function topFuncao() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}