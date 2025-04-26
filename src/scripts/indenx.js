const swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Garante que 3 slides sejam exibidos ao mesmo tempo
  spaceBetween: 100, // Espaço entre os slides
  slidesPerGroup: 1, // Passa 1 slide por vez
  centeredSlides: true, // Centraliza os slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Ativa o loop infinito
  autoplay: {
    delay: 5500, // A cada 2,5 segundos troca de slide
    disableOnInteraction: false, // Não pausa ao interagir
  },
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
