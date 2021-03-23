import gsap from "gsap";

let navbarOpen = false;

function createTimeline(options) {
  const timeline = gsap.timeline();
  timeline.pause();

  timeline.to(options.items, {
    clipPath: "circle(150% at 95.66% 39px)",
    duration: 0.7,
  });

  return timeline;
}

function toggleNavbar(timeline) {
  navbarOpen = !navbarOpen;
  if (navbarOpen) timeline.play();
  else timeline.reverse();
}

export function initNavbarAnimation() {
  const button = document.getElementById("tft-navbar_mobile-button");
  const items = document.getElementById("tft-navbar_items");

  const timeline = createTimeline({
    button: button,
    line1: button.children[0].children[0],
    line2: button.children[0].children[1],
    line3: button.children[0].children[2],
    items: items,
  });

  button.addEventListener("click", () => toggleNavbar(timeline));
}
