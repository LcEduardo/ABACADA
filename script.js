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

const botaodelete = document.querySelector("#delete");

botaodelete.addEventListener("click", function() { 
    char = [];
    txtView.innerText = "";
});

const botaocheck = document.querySelector("#check");
const popcheck = document.querySelector("#popcheck");
const botaofechar2 = document.querySelector("#fechar1");
const txtView2 = document.getElementById("txtView2");


botaocheck.onclick = function () {
    popcheck.showModal(); 
    txtView2.innerHTML = `${char.join("")}`;

};

botaofechar2.onclick = function () {
    popcheck.close();
};