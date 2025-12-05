/* ============================
   1. TYPING EFFECT
============================ */
const typingText = [" websites", " apps", " UI designs", " systems"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index][charIndex];
    charIndex++;
    setTimeout(typeEffect, 95);
  } else {
    setTimeout(deleteEffect, 1400);
  }
}

function deleteEffect() {
  if (!typingElement) return;
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
   2. REVEAL ON SCROLL
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
revealOnScroll();

/* ============================
   3. PARTICLES (simple)
============================ */
const canvas = document.getElementById("heroParticles");
if (canvas) {
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
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = "rgba(255,255,255,0.06)";
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

  window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    initParticles();
  });
}

/* ============================
   4. CONTACT FORM
============================ */
const form = document.getElementById("contactForm");
if (form) {
  const successModal = new bootstrap.Modal(document.getElementById("successModal"));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successModal.show();
    form.reset();
  });
}

/* ============================
   5. DARK–LIGHT MODE
============================ */
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    toggle.textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀️";
  });
}

/* ============================
   6. OPTIONAL: auto-replace profile src if a path provided
   (useful for local preview where your image name may differ)
============================ */
(function setProfileImage() {
  const img = document.getElementById('profileImg');
  if (!img) return;
  // If profile.jpg not found by browser it will show broken image;
  // you can change the file name here if needed (e.g. 'profile.png').
  // If you prefer to use the raw uploaded path in this environment,
  // replace the string below with the path (but when deploying, use relative file).
  const preferred = 'profile.jpg';
  img.src = preferred;
})();
