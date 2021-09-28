const hamburger = document.querySelector(".hamburger");
const hamburgerOpened = document.querySelector(".hamburger-opened");
const closeHamburger = document.querySelector(".close-hamburger");

hamburger.addEventListener("click", () => {
  if (hamburgerOpened.getAttribute("style") === "display: none") {
    closeHamburger.setAttribute("style", "display: block");
    hamburgerOpened.setAttribute("style", "display: inline-block");
  } else {
    closeHamburger.setAttribute("style", "display: none");
    hamburgerOpened.setAttribute("style", "display: none");
  }
});

closeHamburger.addEventListener("click", () => {
  closeHamburger.setAttribute("style", "display: none");
  hamburgerOpened.setAttribute("style", "display: none");
})