gsap.registerPlugin(ScrollTrigger);

const split = new SplitType('.split', { types: 'chars' });

/* -- header --*/ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

gsap.set (navMenu, {
  yPercent: -100,
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  gsap.to(navMenu, {
    yPercent: hamburger.classList.contains("active") ? 0 : -100,
    duration: 0.3,
    ease: "power3.inOut"
  });
});