(function(){

    const openButtom = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav__close');

    

    

    openButtom.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');

    });

    

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

    

    
    

})();