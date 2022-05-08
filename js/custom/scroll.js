const init = () => {
  var scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.009,
    smartphone: {
      smooth: true,
    },
  });
};
init();
