var isCollapseMenuVisible = false;
function toggleMenu() {
  document.querySelector(".nav-links-collapse").style = isCollapseMenuVisible
    ? "display: none"
    : "display: block";
  isCollapseMenuVisible = !isCollapseMenuVisible;
}
