// Aqui é o famoso JS ? Justin Bieber?

function ajustarConteudo() {
    const larguraTela = window.innerWidth;
    const conteudo = document.getElementById("noimg");

    const section = document.querySelector("section.btn");
    const caixaTexo = document.getElementById("caixaTexto");
    const botaoDelete = document.getElementById("delete");

    if (larguraTela > 431) {
        section.insertBefore(caixaTexo, botaoDelete);

    }
}

ajustarConteudo();

window.onresize = ajustarConteudo;

const popup = document.querySelector("#popup");
const modal = document.querySelector("dialog");
const fechar = document.querySelector("#ok");

popup.onclick = function () {
    modal.showModal();
};

ok.onclick = function () {
    modal.close();
};