// gsap 사용하기
// target 설정하기 여기서는 .square 이다

// gsap.to(".square", {

//   x: 700, // pixel 단위로 준다
//   duration: 3, // 초단위로 준다

// });

// ScrollTrigger 사용하기
// target이 .square 이면 .square이 보이면 발동!
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,
  //   scrollTrigger: ".square2", // scrollTrigger이 보일때 square이 작동!
  trigger: ".square",
  start: "top center", //% 로도 줄수있다.
  end: () => `+=${document.querySelector(".square").offsetHeight}`,
  markers: true, //marker에서도 속성을 줄수있다
  //   markers: {
  //     startColor: "purple",
  //     endColor: "fuchsia",
  //     fontSize: "4rem",
  //     indent: 200,
  //   },
  toggleClass: "red", //스크롤 start 되면 클래스 추가해주기
});
