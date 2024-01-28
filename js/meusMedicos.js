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


function toggleDropdown(dropdown) {
    // Adiciona ou remove a classe "active" para mostrar ou ocultar o conteúdo do menu suspenso
    dropdown.classList.toggle('active');

    // Fecha os outros menus suspensos
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (otherDropdown) {
      if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
        otherDropdown.classList.remove('active');
      }
    });
  }

  // Adiciona ou remove a classe "active" para mostrar ou ocultar o conteúdo da sidebar
  function toggleSidebar(sidebar) {
    sidebar.classList.toggle('active');
  }