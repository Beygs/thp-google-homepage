const hamburger = document.querySelector(".hamburger");
const hamburgerOpened = document.querySelector(".hamburger-opened");

hamburger.addEventListener("click", () => {
  console.log(hamburger);
  if (hamburgerOpened.getAttribute("style") === "display: none") {
    hamburgerOpened.setAttribute("style", "display: inline-block");
  } else {
    hamburgerOpened.setAttribute("style", "display: none");
  }
});