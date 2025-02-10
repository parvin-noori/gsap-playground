$(document).ready(function () {
  //-------------------------first-------------------------//

  // let progressbar = $(".progress");

  // gsap.to(progressbar, {
  //   width: "100%",
  //   duration: 2,
  //   ease: "power4.Out",
  // });
  // gsap.from("h1", {
  //   y: -200,
  //   ease: "elastic.out(1, 0.3)",
  //   duration: 2,
  // });
  // gsap.to(progressbar, {
  //   height: "100%",
  //   backgroundColor: "white",
  //   top:0,
  //   y:0,
  //   delay:2
  // });

  //-------------------------second-------------------------//

  // const container = $(".container");
  // const span = $("span");

  // let conatainerAnimate = gsap.to(container, {
  //   width: "20vh",
  //   height: "40vh",
  //   borderRadius: "2%",
  //   paused: true,
  // });
  // let textTween = gsap.to(span, {
  //   x: 0,
  //   fontSize: "2rem",
  //   paused: true,
  // });

  // container.on("mouseenter", () => {
  //   conatainerAnimate.play();
  //   textTween.play();
  // });
  // container.on("mouseleave", () => {
  //   conatainerAnimate.reverse();
  //   textTween.reverse()
  // });

  //-------------------------third-------------------------//
  gsap.set("img", {
    yPercent: -100,
  });
  gsap.set("span", {
    opacity: 0,
  });

  gsap.to("img", {
    yPercent: 0,
    stagger: 0.1,
    delay: 0.5,
    scale: 1.3,
    duration: 2,
    onComplete: scaleAndFade,
    ease: "power4.out",
  });

  function scaleAndFade() {
    gsap.to("img", {
      scale: 1,
      duration: 2,
    });
    gsap.fromTo(
      "span",
      {
        y: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        y: 50,
      }
    );
  }
});
