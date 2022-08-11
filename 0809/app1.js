// Toggle Action
// 내 생각에 다시 스크롤하면 다시 발동!

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart none none reset",
    //             onEnter onLeave onEnterBack onLeaveBack
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});
