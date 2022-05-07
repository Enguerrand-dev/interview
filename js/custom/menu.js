const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

// TODO: add scroll block when menu is open

btn.onclick = function () {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    // change text btn
    btn.innerHTML = "Menu";

    gsap.to(menu, { duration: 0.1, opacity: 0 });
  } else {
    btn.innerHTML = "Close";
    gsap.to(menu, { duration: 0.1, opacity: 1 });
  }
};
