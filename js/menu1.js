(function (){

    const openButtom = document.querySelector('.nav__menu1');
    const menu = document.querySelector('.nav_link1');
    const closeMenu = document.querySelector('.nav__close1');

    openButtom.addEventListener('click', ()=>{
        menu.classList.add('nav_link1--show1');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link1--show1');
    });


})();