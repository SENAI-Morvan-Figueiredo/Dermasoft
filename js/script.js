// abre a sideNav 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

  document.body.style.backgroundColor = B9DDE8;
}

// Fecha a sideNav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = B9DDE8;
}



// faz os textos 1 e 2 do banner emergirem
window.addEventListener('load', function () {
  var textoElement1 = document.querySelector('.textoSobreposto1');
  var textoElement2 = document.querySelector('.textoSobreposto2');



  setTimeout(function () {
    textoElement1.style.opacity = '1';
    textoElement1.style.transform = 'translateY(0)';
  }, 800); // Tempo de atraso em milissegundos antes do surgimento do texto


  setTimeout(function () {
    textoElement2.style.opacity = '1';
    textoElement2.style.transform = 'translateY(0)';
  }, 1000); // Tempo de atraso em milissegundos antes do surgimento do texto


});


// faz os icones de coração e pasta surgirem 
function adicionaClasseAoRolar() {


  // seleciona a div para a animacao
  // const minhaDiv = document.querySelector('.animacao');
  const tagSVG = document.querySelector('.coracao');
  const tagSVG2 = document.querySelector('.pasta');
  const tagSVG3 = document.querySelector('.check');




  // determina o ponto de rolagem da tela
  const pontoDeRolagem = 300;
  const largura = 1150;
  const largura500 = 499;

  // adiciona a classe "ativo" quando a página é rolada para o ponto
  window.addEventListener('scroll', function () {
    if (window.screen.width <= largura && window.pageYOffset > 300) {
      // minhaDiv.classList.add('animacaoAtiva');

      tagSVG.classList.add('coracao1');
      var fraseicone = document.querySelector('.fraseicone');
      setTimeout(function () {
        fraseicone.style.opacity = '1';
        fraseicone.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto
    }
  });

  // adiciona a classe "ativo" quando a página é rolada para o ponto
  window.addEventListener('scroll', function () {
    if (window.screen.width <= largura && window.pageYOffset > 700) {

      tagSVG2.classList.add('pasta1');
      var fraseicone2 = document.querySelector('.fraseicone2');
      setTimeout(function () {
        fraseicone2.style.opacity = '1';
        fraseicone2.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto
    }
  });

  // adiciona a classe "ativo" quando a página é rolada para o ponto
  window.addEventListener('scroll', function () {
    if (window.screen.width <= largura && window.pageYOffset > 1000) {

      tagSVG3.classList.add('check1');
      var fraseicone3 = document.querySelector('.fraseicone3');
      setTimeout(function () {
        fraseicone3.style.opacity = '1';
        fraseicone3.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto
    }
  });

  // adiciona a classe "ativo" quando a página é rolada para o ponto
  window.addEventListener('scroll', function () {
    if (window.screen.width > largura && window.pageYOffset > 300) {

      tagSVG.classList.add('coracao1');
      tagSVG2.classList.add('pasta1');
      tagSVG3.classList.add('check1');

      var fraseicone = document.querySelector('.fraseicone');
      var fraseicone2 = document.querySelector('.fraseicone2');
      var fraseicone3 = document.querySelector('.fraseicone3');

      setTimeout(function () {
        fraseicone.style.opacity = '1';
        fraseicone.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto

      setTimeout(function () {
        fraseicone2.style.opacity = '1';
        fraseicone2.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto

      setTimeout(function () {
        fraseicone3.style.opacity = '1';
        fraseicone3.style.transform = 'translateY(0)';
      }, 900); // Tempo de atraso em milissegundos antes do surgimento do texto

    }
  });


}




adicionaClasseAoRolar()


// animação do svg

// animação do coração
const tagSVG = document.querySelector('.coracao');

const pathDoSVG = document.querySelector('.coracao path');
const tamanhoTotalDoPath = pathDoSVG.getTotalLength();
tagSVG.style.setProperty('--tamanhoTotalDoPath', tamanhoTotalDoPath);
console.log(tamanhoTotalDoPath);



// animação da pasta
const tagSVG2 = document.querySelector('.pasta');

const pathDoSVG2 = document.querySelector('.pasta path');
const tamanhoTotalDoPath2 = pathDoSVG2.getTotalLength();
tagSVG2.style.setProperty('--tamanhoTotalDoPath2', tamanhoTotalDoPath2);
console.log(tamanhoTotalDoPath2);



// animação do check
const tagSVG3 = document.querySelector('.check');

const pathDoSVG3 = document.querySelector('.check path');
const tamanhoTotalDoPath3 = pathDoSVG3.getTotalLength();
tagSVG3.style.setProperty('--tamanhoTotalDoPath3', tamanhoTotalDoPath3);
console.log(tamanhoTotalDoPath3);

