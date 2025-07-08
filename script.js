    
document.addEventListener("DOMContentLoaded", function () {
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");
  const navMenu = document.querySelector(".navmenu");

  if (menuOpenButton && menuCloseButton && navMenu) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.add("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  }

  const carouselElement = document.querySelector('#testimonialCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: 'hover',
      ride: 'carousel'
     
    });
  }
});

