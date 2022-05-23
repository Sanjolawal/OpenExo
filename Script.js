const hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#closed");
console.log(closed);

const Run = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    const nav = document.querySelector("#nav");
    nav.style.height = "100vh";
    nav.style.background = "rgb(75,34,90)";
    const navSub = document.querySelectorAll("#navSub");
    console.log(navSub);

    navSub.forEach((element) => {
      element.style.display = "grid";
    });
    closed.style.display = "grid";
    hamburger.style.display = "none";
  }
};

hamburger.addEventListener("click", Run);

const Hide = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "";
    document.body.style.overflow = "visible";
    nav.style.height = "";
    nav.style.background = "";
    closed.style.display = "none";
    hamburger.style.display = "grid";
    const navSub = document.querySelectorAll("#navSub");
    console.log(navSub);

    navSub.forEach((element) => {
      element.style.display = "none";
    });
  }
};

closed.addEventListener("click", Hide);
