// NAV TOGGLE FOR MOBILE
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// CAROUSEL AUTO SCROLL
const carousel = document.querySelector(".carousel");
let scrollAmount = 0;
const slideWidth = 350; 
setInterval(() => {
  scrollAmount += slideWidth;
  if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 5000);

// STORY BLOCK ANIMATION ON SCROLL
const storyBlocks = document.querySelectorAll('.story-block');

function revealStoryBlocks() {
  const windowHeight = window.innerHeight;
  storyBlocks.forEach(block => {
    const elementTop = block.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100) {
      block.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealStoryBlocks);
window.addEventListener('load', revealStoryBlocks);
