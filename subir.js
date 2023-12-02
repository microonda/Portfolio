window.onscroll = function() {scrollFuncao()};

function scrollFuncao() {
    const voltar = document.getElementById("voltar");
    voltar.style.transition = "0.3s";

    const posicaoFooter = document.getElementById("footer").offsetTop;
    let posicaoRolagem = (document.documentElement.scrollTop || document.body.scrollTop || 0) + 500;

    if (posicaoRolagem > 500) {
        voltar.style.display = "block";
        if (posicaoRolagem >= posicaoFooter) { window.location.href = "projetos.html";}
    } else {
        voltar.style.display = "none";
    }
}

function topFuncao() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}