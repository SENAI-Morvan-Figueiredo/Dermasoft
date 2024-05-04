//diminui a div links quando a pagina e rolada para baixo
window.onscroll = function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var newHeight = 60 - scrollTop;

  if (newHeight < 0) {
    newHeight = 15;
  }

  document.getElementById("Links").style.height = newHeight + "px";
};


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
  