const navKinks = document.querySelector
(".nav-menu .nav-link");
const menuOpenButton = document.querySelector
("#menu-open-button");
const menuCloseButton = document.querySelector
("#menu-close-button");
menuOpenButton.addEventListener("click",() =>{
    // toggle moblie menu visibility
    document.body.classList.toggle("show-mobile-menu");
} );
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click()) ;

navKinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
  
});

const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});