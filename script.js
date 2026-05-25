const deck = document.querySelector(".deck");
const cards = Array.from(document.querySelectorAll(".card"));
let activeIndex = 0;

function goToCard(index) {
  activeIndex = Math.max(0, Math.min(cards.length - 1, index));
  cards[activeIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}

function syncActiveCard() {
  const center = deck.getBoundingClientRect().left + deck.clientWidth / 2;
  let nearest = activeIndex;
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
}

deck.addEventListener("scroll", () => requestAnimationFrame(syncActiveCard), { passive: true });

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToCard(activeIndex + 1);
  if (event.key === "ArrowLeft") goToCard(activeIndex - 1);
});
