function transition() {
  var tl = gsap.timeline();
  tl.to("ul.transition li", { duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.2 }, 0);
  tl.to("ul.transition li", { duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: 0.1 });
  tl.to(".left", { opacity: 0, duration: 0.5 }, 0)
}

function animation() {
  var tl = gsap.timeline();
  tl.from(".left", { duration: 1, translateY: 50, opacity: 0 });
  tl.to(".img1", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1 }, "-=0.8");
  tl.to(".img2", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, delay: 0.1 }, "-=0.8");
  tl.to(".img3", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, delay: 0.1 }, "-=0.8");
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        transition();
        await delay(1500);
        done();
      },
      async enter(data) {
        animation();
      },
      async once(data) {
        animation();
      },
    },
  ],
});
