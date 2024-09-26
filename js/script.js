// Função para abrir a página de um projeto em uma nova aba
function abrirProjeto(url) {
    window.open(url, '_blank');
}

// Suavizar a rolagem ao clicar nos links do menu de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        alvo.scrollIntoView({ behavior: 'smooth' });
    });
});

// Função para abrir a página do projeto
function abrirProjeto(link) {
    window.location.href = link;
}


