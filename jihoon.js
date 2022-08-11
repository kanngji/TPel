gsap.registerPlugin(ScrollTrigger);
// 이렇게하면 대각선으로 흘러간다.
//빨간색 어몽어스 출발

gsap.to(".member1", {
  x: 700,
  // y: 600,
  duration: 8,
  rotation: 540,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member1", {
  y: 600,
  duration: 8,
  delay: 2,
  rotation: 1080,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});
//파란색 어몽어스 출발
gsap.to(".member2", {
  x: 700,
  duration: 8,
  rotation: 540,
  scaleY: 2,
  scaleX: 2,
});
gsap.to(".member2", {
  y: -200,
  duration: 8,
  delay: 2,
  rotation: 1080,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});
//보라색 어몽어스 출발
gsap.to(".member3", {
  x: -800,
  duration: 7,
  rotation: 630,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member3", {
  y: 650,
  duration: 7,
  delay: 2,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});

//녹색어몽어스 출발
gsap.to(".member4", {
  x: -850,
  duration: 7,
  rotation: 630,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member4", {
  y: -300,
  duration: 7,
  delay: 2,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});

//timeline() 써서 구현하기
const box3 = gsap.timeline();
box3
  .to(".scene-1", {
    x: -800,
    y: 100,
    scale: 2,
    opacity: 1,
  })
  .to(".scene-1", {
    opacity: 0,
  })
  .to(".scene-2", {
    x: 800,
    scale: 2,
  })
  .to(".scene-2", {
    opacity: 0,
  })
  .to(".scene-3", {
    x: 800,
    scale: 2,
  })
  .to(".scene-3", {
    opacity: 0,
  })
  .to(".scene-4", {
    x: -800,
    y: -200,
    scale: 2,
  })
  .to(".scene-4", {
    opacity: 0,
  });
ScrollTrigger.create({
  animation: box3,
  trigger: ".box3",
  start: "top top ",
  end: "bottom bottom",
  // end: "+=5000",

  pin: true,
  // scrub: true,
  markers: true,
});
