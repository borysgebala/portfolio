// Animacje przy scrollu
const sections = document.querySelectorAll("section");
const projects = document.querySelectorAll(".project");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) sec.classList.add("show");
  });

  projects.forEach(proj => {
    const projTop = proj.getBoundingClientRect().top;
    if (projTop < triggerBottom) proj.classList.add("show");
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
