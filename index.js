const iconBar = document.getElementById("menu-bar")
const menuNav = document.getElementById("menu-nav")

iconBar.onclick = abrirMenu;

function abrirMenu(){
    menuNav.classList.toggle("on")
}