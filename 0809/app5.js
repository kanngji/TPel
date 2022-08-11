gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trgger: ".box",
  start: "top 80%",
  end: "top 50%",
  markers: true,
  toggleClass: "box-red",
});
