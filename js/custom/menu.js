const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

const menu_item = document.getElementsByClassName("menu__small__item");

// TODO: add scroll block when menu is open

btn.onclick = () => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    // change text btn
    btn.innerHTML = "Close";
    // create new timeline
    const tl = gsap.timeline();
    tl.to(menu, { duration: 0.1, opacity: 1 });
    open(tl);
  } else {
    btn.innerHTML = "Menu";
    gsap.to(menu, { duration: 0.1, opacity: 0 });
    close();
  }
};

const open = (tl) => {
  tl.fromTo(
    ".small__language",
    { duration: 0.5, opacity: 0, x: 10 },
    { duration: 0.5, opacity: 1, x: 0 }
  );
  for (const item of menu_item) {
    tl.fromTo(
      item,
      { duration: 0.1, opacity: 0, x: 100 },
      { duration: 0.33, opacity: 1, x: 0 }
    );
  }
  tl.fromTo(
    "#menu__cta",
    { duration: 0.1, opacity: 0, y: 10 },
    { duration: 0.1, opacity: 1, y: 0 }
  );
};

const close = (tl) => {};
