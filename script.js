function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const elem = document.getElementById("element");

const options = {
  strings: ["Full Stack Web Devloper", "I Build Web Applications"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};
const typed = new Typed(elem, options);
