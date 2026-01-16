// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburger = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("open");
  header.classList.toggle("hidden");

  console.log(sidebar.classList);
});
