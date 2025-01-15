import { loadHomepage } from "./homepage";
import { loadMenupage } from "./menupage";
import { loadAboutpage } from "./aboutpage";

document
  .getElementById("home-btn")
  .addEventListener("click", () => loadPage("home"));

document
  .getElementById("menu-btn")
  .addEventListener("click", () => loadPage("menu"));

document
  .getElementById("about-btn")
  .addEventListener("click", () => loadPage("about"));

function loadPage(page) {
  if (page == "home") {
    loadHomepage();
  } else if (page == "about") {
    loadAboutpage();
  } else if (page == "menu") {
    loadMenupage();
  }
}

function initialPageLoad() {
  loadHomepage();
}

initialPageLoad();
