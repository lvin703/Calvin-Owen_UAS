/* ============================
   1. TYPING EFFECT
============================ */
const typingText = [" websites", " apps", " UI designs", " systems"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index][charIndex];
    charIndex++;
    setTimeout(typeEffect, 95);
  } else {
    setTimeout(deleteEffect, 1400);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 60);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();

/* ============================
   2. REVEAL
============================ */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

/* ============================
   3. PARTICLES
============================ */
const canvas = document.getElementById("heroParticles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

/* ============================
   4. CONTACT FORM
============================ */
const form = document.getElementById("contactForm");
const successModal = new bootstrap.Modal(document.getElementById("successModal"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successModal.show();
  form.reset();
});

/* ============================
   5. DARK–LIGHT MODE
============================ */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  toggle.textContent =
    document.body.classList.contains("light-theme") ? "🌙" : "☀️";
});
