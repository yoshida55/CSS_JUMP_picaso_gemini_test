// ハンバーガーメニュークリック時にクラス（open）を付け外しする
document.getElementById("hamburger-btn").addEventListener("click", function () {
  // ボタン自身に .open を付けて「×」にする
  this.classList.toggle("open");
  // サイドバーに .open を付けて表示・非表示を切り替える
  document.getElementById("side-menu").classList.toggle("open");
});

// -----------------------------------------------

// ハンバーガーメニューをおしたら、サイドバーが表示されるようにする
const hamburgerBtn = document.getElementById("hamburger-btn");
const sideMenu = document.getElementById("side-menu");

hamburgerBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});
