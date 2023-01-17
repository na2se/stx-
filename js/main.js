Splitting();
gsap.from(".main-visual__txt .char", {
  opacity: 0,
  y: 300,
  duartion: 1,
  stagger: 0.02,
});
// to는 보내는거
// from은 오는거

const swiper = new Swiper(".main-visual", {
  //slide,cube,fade,
  effect: "cube",
  loop: true,
  pagination: {
    el: ".main-visual .pagination",
    type: "bullets",
  },
});

const btnDown = document.querySelector(".btn-down");
btnDown.addEventListener("click", function () {
  window.scrollTo({ top: 900, behavior: "smooth" });
});
