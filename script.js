// Aqui é o famoso JS ? Justin Bieber?

const popup = document.querySelector("#popup");
const modal = document.querySelector("dialog");
const fechar = document.querySelector("#ok");

popup.onclick = function () {
    modal.showModal();
};

ok.onclick = function () {
    modal.close();
};

// Colocando so botões para funcionar bb;

// Seleciona todos os btns que da classe .abcd
btns = document.querySelectorAll(".abcd");
txtView = document.getElementById("txtView");

// Especifica a mesma função para cada botão clicado
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {

        // textContent verifica o campo de texto do botão clicado
        alert(`Clicou no botão: ${btn.textContent}`)
    })
})