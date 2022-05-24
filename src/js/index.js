/*
OBJETIVO 1: quando passar o mouse em cima do personagem  temos que:
    - colocar a classe selecionado no personagem que passamos o mouse em cima
    para adicionar a animação nele.

    - retirar a classe selecionado do personagem que esta selecionado.
*/

/*const homemDeFerro = document.getElementById('homem-de-ferro');
homemDeFerro.addEventListener('click',() => {
    homemDeFerro.classList.add('selecionado')
}) */

// O query selector all, busca uma lista.
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {

    //Verifica se nao esta selecionando o ultron, que e um jogador ja selecionado...
    const idSelecionado = personagem.attributes.id.value;
    if(idSelecionado === 'ultron') return;

    //Essa parte, ele usa querySelector pra buscar apenas 1 classe para remover essa classe, no caso o selecionado...
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    //Nessa parte, ele adiciona uma classe selecionado a um personagem, quando clicado...
    personagem.classList.add("selecionado");

    /*
    OBJETIVO 2:   
        - Alterar a imagem e nome do personagem grande.
    */
  
    
    
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado;

  
  });
});


