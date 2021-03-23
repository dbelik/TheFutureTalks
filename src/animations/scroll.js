import gsap from "gsap";

function timelineTo(timeline, element, trigger, speed) {
  timeline.to(element, {
    scrollTrigger: {
      trigger: trigger,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
    },
    y: () => `-${trigger.offsetHeight * speed}px`,
  });
}

export function initScrollAnimations() {
  Array.from(document.querySelectorAll('[data-scroll-trigger]')).forEach((element) => {
    const timeline = gsap.timeline();
    const trigger = document.getElementById(element.dataset.scrollTriggerId);
    const speed = element.dataset.scrollTriggerSpeed;
    timelineTo(timeline, element, trigger, speed);
  });
}
