// Syndicate Union — shared site behaviour
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initFaqAccordion();
  initFooterYear();
  initStarfield();
});

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isOpen = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function initFooterYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas || !canvas.getContext) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const ctx = canvas.getContext("2d");
  let embers = [];
  let width, height;

  const colors = [
    "196, 74, 46",
    "224, 172, 63",
    "245, 215, 137",
    "122, 15, 28",
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.floor((width * height) / 16000);
    embers = Array.from({ length: count }, () => spawnEmber(true));
  }

  function spawnEmber(randomY) {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 10,
      r: Math.random() * 2 + 0.6,
      speed: Math.random() * 0.5 + 0.15,
      drift: (Math.random() - 0.5) * 0.4,
      flicker: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const e of embers) {
      e.y -= e.speed;
      e.x += e.drift;
      e.flicker += 0.08;
      if (e.y < -10) Object.assign(e, spawnEmber(false));

      const glow = (Math.sin(e.flicker) + 1) / 2;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${e.color}, ${0.3 + glow * 0.5})`;
      ctx.shadowColor = `rgba(${e.color}, 0.8)`;
      ctx.shadowBlur = 4;
      ctx.fill();
    }
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}
