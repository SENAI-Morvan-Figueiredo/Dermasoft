

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
    // seleciona a div
    const minhaDiv = document.querySelector('.animacao');
  
    // determina o ponto de rolagem da tela
    const pontoDeRolagem = 50;
  
    // adiciona a classe "ativo" quando a página é rolada para o ponto
    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= pontoDeRolagem) {
        minhaDiv.classList.add('animacaoAtiva');
      }
    });
  }
  adicionaClasseAoRolar()