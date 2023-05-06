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

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
  
    if (nome == "" ) {
      exibirPopup();
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
  });
  
  function exibirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }