function copiar(texto, mensagem) {
    navigator.clipboard.writeText(texto)
    .then(() => {
        alert(mensagem + ' copiado: ' + texto);
    })
    .catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
}

function copiarEmail() { copiar('felipeborgesmooca@gmail.com', 'Endereço de e-mail') }
function copiarTelefone() { copiar('(11) 93388-7185', 'Telefone (whatsapp)') }

// aparecer sections

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
  
    const isTopInViewport = e => e.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight);
    const handleScroll = () => sections.forEach(sec => isTopInViewport(sec) ? showSection(sec) : null);
  
    const showSection = sec => {
      sec.style.display = 'block';
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });
  
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