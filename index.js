const menu = document.querySelector(".menu__btn");
const item = document.querySelectorAll(".item");

menu.addEventListener("click", () => {
  item.forEach((i) => i.classList.toggle("show"));
  menu.classList.toggle("rotate");
});
