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
const btns = document.querySelectorAll(".abcd");
const txtView = document.getElementById("txtView");

let char = [];

// Especifica a mesma função para cada botão clicado
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        char.push(`${btn.textContent}`);
        let texto = "";

        for(const i in char){
            
            texto += char[i];
            
        }

        txtView.innerText = `${texto}`

    });
});