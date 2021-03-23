import { initNavbarAnimation } from "./navbar";
import { initScrollAnimations } from "./scroll";
import { initNavbarDropdown } from "./nav-dropdown";

window.addEventListener("load", () => {
  initNavbarAnimation();
  initScrollAnimations();
  initNavbarDropdown();
});
