// splash page script

const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const body = document.querySelector("#body");
const password = document.querySelector("#password");
const splashSubmit = document.querySelector("#splashSubmit");
const splashContainer = document.querySelector("#splashContainer");
const hamburger = document.querySelector("#hamburger");

const Prevent = (e) => {
  e.preventDefault();
  if (password.value === `${1234}#${56}#`) {
    splashContainer.style.display = "none";
    body.style.height = "";
    body.style.overflow = "visible";
    nav.style.display = "grid";
    header.style.display = "grid";
  }
  if (password.value === `${1234}#${56}#` && window.innerWidth < 750) {
    hamburger.style.display = "grid";
  }
};

splashSubmit.addEventListener("click", Prevent);

// Planets display script

const planet = [
  "Videos/mars_mars.glb",
  "Videos/mars_moon.glb",
  "Videos/mars_mars.glb",
  "Videos/mars_moon.glb",
  "Videos/mars_mars.glb",
  "Videos/mars_moon.glb",
  "Videos/mars_mars.glb",
  "Videos/mars_moon.glb",
  "Videos/mars_mars.glb",
  "Videos/mars_moon.glb",
];

const newPlanets = planet.map((each) => {
  return ` <div class="swiper-slide">
            <model-viewer
              src=${each}
              alt="Planet"
              auto-rotate
              camera-controls
              disable-tap    
              ar
              ios-src="Videos/mars_map.glb"
              class="arrowImg"
            >
            </model-viewer>
          </div>`;
});
const swiperWrapper = document.querySelector(`.swiper-wrapper`);
swiperWrapper.innerHTML = newPlanets.join(` `);

// Planet Carousel script
const wrapper = document.querySelector(`.swiper-wrapper`);
const carousel = document.querySelector(".carousel");

function Test(e) {
  const activePlanet = e.target.parentElement;

  if (activePlanet.classList.contains(`swiper-slide-active`)) {
    if (window.innerWidth < 1000) {
      header.style.display = "grid";
      carousel.style.display = "none";
    } else {
      header.style.display = "none";
      carousel.style.display = "grid";
      window.scrollTo(0, 0);
      gsap.from(`.carouselImg`, {
        width: 5,
        duration: 2,
        ease: `bounce`,
      });
      gsap.from(`.zoomedImg`, {
        width: 50,
        duration: 2,
        ease: `back`,
        rotation: -360,
      });
    }
    const zoomedImg = document.querySelector(`.zoomedImg`);
    zoomedImg.src = activePlanet.firstElementChild.src;
    // Carousel exit script

    const exitCarousel = document.querySelector(".exitCarousel");

    const GoBack = () => {
      header.style.display = "grid";
      carousel.style.display = "none";
    };

    exitCarousel.addEventListener("click", GoBack);
  }
}

wrapper.addEventListener(`click`, Test);

window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    header.style.display = "grid";
    carousel.style.display = "none";
  }
});

// NAVIGATION BAR OPENING AND CLOSING SCRIPT/

// const hamburger = document.querySelector("#hamburger"); hamburger element already selected at line 9
const closed = document.querySelector("#closed");
const navThird = document.querySelector(`.navThird`);

const Run = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    // nav.style.height = "65vh";
    gsap.from(`#nav`, {
      duration: 1,
      y: 450,
      ease: `back`,
    });
    gsap.from(`.navMenu, .navMenu1`, {
      delay: 0.5,
      opacity: 0,
      duration: 0.5,
      x: -150,
      stagger: 0.2,
    });
    nav.style.background = "rgb(215,0,255, 1)";
    nav.style.zIndex = 70;
    const navContainer = document.querySelector("#navContainer");
    navContainer.style.display = "block";
    navContainer.style.marginTop = `8vh`;
    navContainer.style.marginBottom = `10vh`;
    navThird.style.display = "block";
    navThird.style.marginBottom = `30vh`;
    closed.style.display = "grid";
    closed.style.zIndex = 100;
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
    const navContainer = document.querySelector("#navContainer");
    console.log(navContainer);
    navContainer.style.display = "none";
    navThird.style.display = "none";
  }
};

closed.addEventListener("click", Hide);

// FAQS and Team Navigations SCROLLING SCRIPT

const a = document.querySelector(".a");
const ab = document.querySelector(".ab");

const Fix = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "";
    document.body.style.overflow = "visible";
    nav.style.height = "";
    nav.style.background = "";
    closed.style.display = "none";
    hamburger.style.display = "grid";
    const navContainer = document.querySelector("#navContainer");
    console.log(navContainer);
    navContainer.style.display = "none";
    navThird.style.display = "none";
  }
};
ab.addEventListener("click", Fix);
a.addEventListener("click", Fix);

// CONNECT WALLET POPUP SCRIPT SECTION

const popUpClosed = document.querySelector("#popUpClosed");
const navMenu1 = document.querySelector("#navMenu1");

const showPopUp = () => {
  popUpCon.style.display = "grid";
  gsap.from(`#popUpCon`, {
    duration: 1,
    y: -450,
    ease: `back`,
  });
};

navMenu1.addEventListener("click", showPopUp);

const hidePopUp = () => {
  popUpCon.style.display = "none";
  console.log(popUpClosed);
};

popUpClosed.addEventListener("click", hidePopUp);

// Roadmap section script

const roadmap = [
  {
    phase: "Phase 1",
    info: `2022 4Q <br> Launch of Openexo.io V1 <br> Release of Mars NFT’s on the Cardano blockchain`,
  },
  {
    phase: "Phase 2",
    info: `2023 Q1 <br> User Account V2 <br> Planetary NFT drop`,
  },
  {
    phase: "Phase 3",
    info: `2023 Q2 <br> Functionality Updates V2 <br> Cross platform blockchain <br> interoperability V1`,
  },
  {
    phase: "Phase 4",
    info: `2023 Q4`,
  },
  {
    phase: "Phase 5",
    info: `2024 02`,
  },
];
let newroadmap = roadmap.map((each) => {
  return `
  <div class="roadmapMobile" data-aos="zoom-in" data-aos-duration="3000" >
        <h1 class="roadmapHead" >${each.phase}</h1>
        <p class="roadPar">${each.info}</p>
      </div>  `;
});

const mainRoadmap2 = document.querySelector(".mainRoadmap2");
mainRoadmap2.innerHTML = ` <p class="project">Project <span class="roadmap"> Roadmap</span></p>${newroadmap.join(
  " "
)}`;

// OUR TEAM SCRIPT SECTION

const teams = [
  {
    img: "Images/team1.png",
    name: "DAVID",
    title: "Co-Founder",
  },
  {
    img: "Images/team2.png",
    name: "PARKER",
    title: "Lead Project Communicator",
  },
  {
    img: "Images/team3.png",
    name: "ABE",
    title: "Lead Developer",
  },
];

let newteam = teams.map((each) => {
  return `
   <section class="teamCard" data-aos="slide-right" data-aos-duration="3500" >
          <img
            src="${each.img}"
            alt="team image"
            class="teamImg"
            loading="lazy"
          />
          <h1 class="teamName">${each.name}</h1>
          <p class="teamTitle">${each.title}</p>
        </section>
        `;
});

const teamSubsection = document.querySelector(".teamSubsection");
teamSubsection.innerHTML = newteam.join(" ");
