// ScrollTrigger
// Scrub

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1000,
  duration: 8,
  ScrollTrigger: {
    trigger: ".square",
    start: "top 80%",
    end: "top 30%",
    //스크롤이 start - end 사이에 있을떄마다 왔다갔다
    scrub: true,
    toggleAction: "restart none none none",

    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});
