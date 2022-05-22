const menuNav = document.getElementById("menu-nav")
const openMenu = document.getElementById("open-menu")
const closeMenu = document.getElementById("close-menu")

openMenu.onclick = abrirMenu;
closeMenu.onclick = fecharMenu;

function abrirMenu(){
    menuNav.classList.toggle("on")
    openMenu.classList.toggle("on")
    if(openMenu.classList = "on"){
        closeMenu.classList.toggle("on")
    }
}

function fecharMenu (){
    menuNav.classList.toggle("on")
    openMenu.classList.toggle("on")
}