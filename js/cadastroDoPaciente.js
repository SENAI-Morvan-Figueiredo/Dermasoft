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
  var telefone = document.getElementById("telefone").value;
  var idade = document.getElementById("idade");
  var endereco = document.getElementById("endereco").value;
  var sexo = document.getElementById("sexo").value

  if (nome !== "" && email !== "" && telefone !== ""  && idade !== ""  && endereco !== "" && sexo !== "" ) {
    exibirPopup();
  } else {
    alert("Por favor, preencha todos os campos do formulário.");
  }
});

// função para exibir o popuo 
function exibirPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}


// função para fechar o popup
function fecharPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}