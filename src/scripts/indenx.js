const swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Garante que 3 slides sejam exibidos ao mesmo tempo em telas maiores
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
    delay: 5500, // A cada 5,5 segundos troca de slide
    disableOnInteraction: false, // Não pausa ao interagir
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // 3 slides para telas maiores que 768px
      spaceBetween: 100,
    },
    0: {
      slidesPerView: 1, // 1 slide para telas menores que 768px
      spaceBetween: 20,
    },
  },
});

function openNav() {
  const sidepanel = document.getElementById("mySidepanel");
  sidepanel.style.width = "250px";

  document.addEventListener("click", closeOnClickOutside);

  const anchors = sidepanel.querySelectorAll("a");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", closeNav);
  });
}

function closeNav() {
  const sidepanel = document.getElementById("mySidepanel");
  sidepanel.style.width = "0";

  document.removeEventListener("click", closeOnClickOutside);
}

function closeOnClickOutside(event) {
  const sidepanel = document.getElementById("mySidepanel");

  if (!sidepanel.contains(event.target) && event.target.id !== "menuMobile") {
    closeNav();
  }
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
