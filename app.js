const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')//ul

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

