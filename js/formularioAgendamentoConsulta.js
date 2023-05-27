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