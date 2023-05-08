window.addEventListener('load', function() {
    var textoElement = document.querySelector('.textoSobreposto1');
  
    setTimeout(function() {
      textoElement.style.opacity = '1';
      textoElement.style.transform = 'translateY(0)';
    }, 800); // Tempo de atraso em milissegundos antes do surgimento do texto
  });
  
  
          // faz os icones de coração e pasta surgirem 
          functionadicionaClasseAoRolar(); {
              // seleciona a div
  
              const minhaDiv = document.querySelector('.doutor');
  
              // determina o ponto de rolagem da tela
              const PontoDeRolagem = 700;
  
              var alturaTela = window.innerHeight;
              var posicaoScroll = window.scrollY || window.pageYOffset;
  
              window.addEventListener('scroll', function () {
                  if (posicaoScroll > alturaTela) {
                      minhaDiv.classList.add('.doutorAtivo');
                  }
              });
          }
  