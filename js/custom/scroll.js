const init = () => {
  var scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.02,
    smartphone: {
      smooth: true,
    },
  });
};
init();
