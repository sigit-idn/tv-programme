const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function(){

    const navMenu = document.querySelector('.nav-menu');

    navMenu.classList.toggle('nav-show');
})