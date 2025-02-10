$(document).ready(function () {
  let progressbar = $(".progress");

  gsap.to(progressbar, {
    width: "100%",
    duration: 2,
    ease: "power4.Out",
  });
  gsap.from("h1", {
    y: -200,
    ease: "elastic.out(1, 0.3)",
    duration: 2,
  });
  gsap.to(progressbar, {
    height: "100%",
    top:0,
    y:0,
    delay:2
  });
});
