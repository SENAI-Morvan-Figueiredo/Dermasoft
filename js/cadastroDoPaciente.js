function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".p1").style.marginLeft = "250px";
    document.getElementById("cadastro").style.marginLeft = "250px";
    document.body.style.backgroundColor = B9DDE8;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector(".p1").style.marginLeft = "0";
    document.getElementById("cadastro").style.marginLeft= "0";
    document.body.style.backgroundColor = B9DDE8;
}