document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  const cursorDot = document.createElement("div");
  cursorDot.className = "cursor-dot";
  document.body.appendChild(cursorDot);

  document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, input, .interactive"
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursor.classList.add("cursor-hover")
    );
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor-hover")
    );
  });
});

// Add parallax effect
const createParallaxEffect = () => {
  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xAxis = (window.innerWidth / 2 - clientX) / 25;
    const yAxis = (window.innerHeight / 2 - clientY) / 25;

    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      heroContent.style.transform = `translate3d(${xAxis}px, ${yAxis}px, 0)`;
    }
  });
};

// Initialize parallax effect
document.addEventListener("DOMContentLoaded", function () {
  // ... existing cursor initialization ...
  createParallaxEffect();
});
