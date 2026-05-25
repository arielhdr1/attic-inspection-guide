const carousel = document.querySelector("#cardCarousel");
const cards = Array.from(document.querySelectorAll(".guide-card"));
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let activeIndex = 0;

function updateControls() {
  prevBtn.disabled = activeIndex === 0;
  nextBtn.disabled = activeIndex === cards.length - 1;
}

function goToCard(index) {
  activeIndex = Math.max(0, Math.min(cards.length - 1, index));
  cards[activeIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  updateControls();
}

function syncActiveCard() {
  const carouselRect = carousel.getBoundingClientRect();
  const center = carouselRect.left + carouselRect.width / 2;
  let nearest = 0;
  let nearestDistance = Infinity;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs(rect.left + rect.width / 2 - center);
    if (distance < nearestDistance) {
      nearest = index;
      nearestDistance = distance;
    }
  });

  activeIndex = nearest;
  updateControls();
}

prevBtn.addEventListener("click", () => goToCard(activeIndex - 1));
nextBtn.addEventListener("click", () => goToCard(activeIndex + 1));
carousel.addEventListener("scroll", () => window.requestAnimationFrame(syncActiveCard), { passive: true });

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToCard(activeIndex + 1);
  if (event.key === "ArrowLeft") goToCard(activeIndex - 1);
});

updateControls();
