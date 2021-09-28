const hamburger = document.querySelector(".hamburger");
const hamburgerOpened = document.querySelector(".hamburger-opened");
const closeHamburger = document.querySelector(".close-hamburger");
const micro = document.querySelector(".micro");
const cross = document.querySelector(".cross");

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
});

micro.addEventListener("click", () => {
  const search = document.querySelector("#searchbar-bar").value;
  const Speech = new SpeechSynthesisUtterance(search === "" ? "Entrez du texte por favor" : search);

  Speech.value = 1;
  Speech.rate = 1;
  Speech.pitch = 1;

  window.speechSynthesis.speak(Speech);
})