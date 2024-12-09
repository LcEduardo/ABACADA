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
const botaodelete = document.querySelector("#delete");

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

botaodelete.addEventListener("click", function() { //aqui pode usar o addEventLSITENER direto
    char = []; // Tive que usar o Char aqui novamente para podere "zerar" ele assim pq se não ele continua armazenando o valor de cima
    txtView.innerText = ""; //Aqui nesse caso ao inves de atribuir algum valor a gente passa valor zero
});

const botaocheck = document.querySelector("#check");
const popcheck = document.querySelector("#popcheck");
const botaofechar2 = document.querySelector("#fechar1");

botaocheck.onclick = function () {
    popcheck.showModal(); //popchek é o modal
    txtView2.innerHTML = `Parabéns! Você formou a palavra:<br>${char.join("")} <br>`; //tive que usar o innerhtml para conseguir pular linha mas poderia ser innertext ou textcontent
    //O textContente é para poder adicionar no pop sem ele não tem como usar a função texto q vc criou 
    // pai aqui eu so trouxe o array e sei o join que é uma função para juntar as palvras 
    //vsf trampo do caralho #desisto 
    //ferias
    //vsf dnv

};

botaofechar2.onclick = function () {
    popcheck.close();
};