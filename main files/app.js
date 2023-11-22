const setUp = document.querySelector(".setup__guide__questions");
const arrowDown = document.querySelector(".bx-chevron-down");

arrowDown.addEventListener("click", () => {
  setUp.classList.toggle("active");
});
