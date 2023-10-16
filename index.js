document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMobile = document.querySelector('.nav-mobile');
    const hamburgerMenuClose = document.querySelector('.hamburger-menu-close');
    // console.log(hamburgerMenu);
    // console.log(navMobile);
    
    hamburgerMenu.addEventListener('click', function() {
      this.classList.toggle('nav-mobile');
      navMobile.classList.toggle('nav-mobile');
    });

    hamburgerMenuClose.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('nav-mobile');
        navMobile.classList.toggle('nav-mobile');
      });
  });



    // JavaScript code to handle the slideshow
    // const slides = document.querySelectorAll('.slide');
    // let currentSlide = 0;

    // const reviews = [
    //   { name: 'Customer 1', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit eget nibh ullamcorper congue.' },
    //   { name: 'Customer 2', review: 'Nulla facilisi. Donec convallis euismod turpis, vel maximus ex egestas id.' },
    //   { name: 'Customer 3', review: 'Etiam tristique, lacus ac cursus gravida, mi justo feugiat tellus, ut tempus ante leo vel mi.' }
    // ];

    // function showSlide(index) {
    //   slides.forEach((slide, i) => {
    //     if (i === index) {
    //       slide.innerHTML = `<h3>${reviews[i].name}</h3><p>${reviews[i].review}</p>`;
    //       slide.classList.add('active');
    //     } else {
    //       slide.classList.remove('active');
    //     }
    //   });
    // }

    // function nextSlide() {
    //   currentSlide = (currentSlide + 1) % slides.length;
    //   showSlide(currentSlide);
    // }

    // setInterval(nextSlide, 3000); // Change slide every 3 seconds

    