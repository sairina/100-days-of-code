function openNav(x) {
  document.getElementById("sidenav").style.width = "300px";
  document.getElementById("main-doc").style.marginLeft = "400px";
  x.classList.toggle("change");
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main-doc").style.marginLeft = "0";
}