// Aqui é o famoso JS ? Justin Bieber?

function ajustarConteudo() {
    const larguraTela = window.innerWidth;
    const conteudo = document.getElementById("noimg");

    const section = document.querySelector("section.btn");
    const caixaTexo = document.getElementById("caixaTexto");
    const botaoDelete = document.getElementById("delete");

    if (larguraTela < 431) {
        section.insertBefore(caixaTexo, botaoDelete);

    }
}

ajustarConteudo();

window.onresize = ajustarConteudo;