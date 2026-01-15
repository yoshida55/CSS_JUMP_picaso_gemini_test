// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburger = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("side-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("active");
});