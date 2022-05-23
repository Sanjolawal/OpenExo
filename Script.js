const hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#close");
console.log(hamburger);

const Hide = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "";
    document.body.style.overflow = "visible";
    nav.style.height = "";
    nav.style.background = "";
    const navSub = document.querySelectorAll("#navSub");
    console.log(navSub);

    navSub.forEach((element) => {
      element.style.display = "none";
    });
    closed.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi56 bi-list"
        id="hamburger"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>`;
  }
};

closed.addEventListener("click", Hide);

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
    hamburger.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>`;
  } else if (window.innerWidth > 750) {
    document.body.style.height = "";
    document.body.style.overflow = "visible";
    nav.style.height = "";
    nav.style.background = "";
    const navSub = document.querySelectorAll("#navSub");
    console.log(navSub);

    navSub.forEach((element) => {
      element.style.display = "none";
    });
  }
};

hamburger.addEventListener("click", Run);
