console.log('script loaded');


document.addEventListener('DOMContentLoaded', function() {
    const mainBody = document.querySelector('.main-body');
    mainBody.addEventListener('click', function(event) {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navMobile = document.querySelector('.nav-mobile');
        const hamburgerMenuClose = document.querySelector('.hamburger-menu-close');

        if (event.target === hamburgerMenu) {
            navMobile.classList.toggle('active');
        } else if (event.target === hamburgerMenuClose) {
            navMobile.classList.remove('active');
        }
    });
});
  