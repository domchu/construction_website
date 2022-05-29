let barsClickBtn = document.querySelector(".bars");
let mobileMenu = document.querySelector(".navlinks");
let close = document.querySelector(".close");

barsClickBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  close.style.display = "block";
});
close.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
