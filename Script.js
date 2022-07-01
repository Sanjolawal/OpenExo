// splash page script

const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const body = document.querySelector("#body");
const password = document.querySelector("#password");
const splashSubmit = document.querySelector("#splashSubmit");
const splashContainer = document.querySelector("#splashContainer");

const Prevent = (e) => {
  e.preventDefault();
  if (password.value === `${1234}#${56}#`) {
    splashContainer.style.display = "none";
    body.style.height = "";
    body.style.overflow = "visible";
    nav.style.display = "grid";
    header.style.display = "block";
  }
};

splashSubmit.addEventListener("click", Prevent);

// Carousel script

const arrowImg = document.querySelector(".arrowImg");
const carousel = document.querySelector(".carousel");

const ChangeSection = () => {
  if (window.innerWidth < 1000) {
    header.style.display = "grid";
    carousel.style.display = "none";
  } else {
    header.style.display = "none";
    carousel.style.display = "grid";
  }
};

arrowImg.addEventListener("click", ChangeSection);

window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    header.style.display = "grid";
    carousel.style.display = "none";
  }
});

// Carousel exit script

const exitCarousel = document.querySelector(".exitCarousel");

const GoBack = () => {
  header.style.display = "grid";
  carousel.style.display = "none";
};

exitCarousel.addEventListener("click", GoBack);

// NAVIGATION BAR OPENING AND CLOSING SCRIPT/

const hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#closed");

const Run = () => {
  if (window.innerWidth < 750) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    nav.style.height = "100vh";
    nav.style.background = "rgb(215,0,255, 1)";
    const navContainer = document.querySelector("#navContainer");
    navContainer.style.display = "block";
    navContainer.style.marginTop = "-35vh";
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
    const navContainer = document.querySelector("#navContainer");
    console.log(navContainer);
    navContainer.style.display = "none";
  }
};

closed.addEventListener("click", Hide);

// window.addEventListener("resize", function () {
//   if (window.innerWidth < 750) {
//     document.body.style.height = "";
//     document.body.style.overflow = "visible";
//     nav.style.height = "";
//     nav.style.background = "";
//     closed.style.display = "none";
//     hamburger.style.display = "grid";
//     const navContainer = document.querySelector("#navContainer");
//     console.log(navContainer);
//     navContainer.style.display = "none";
//   }
// });

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
  }
};
ab.addEventListener("click", Fix);
a.addEventListener("click", Fix);

// CONNECT WALLET POPUP SCRIPT SECTION

const popUpClosed = document.querySelector("#popUpClosed");
const navMenu1 = document.querySelector("#navMenu1");

const showPopUp = () => {
  popUpCon.style.display = "grid";
};

navMenu1.addEventListener("click", showPopUp);

const hidePopUp = () => {
  popUpCon.style.display = "none";
  console.log(popUpClosed);
};

popUpClosed.addEventListener("click", hidePopUp);

// Cards section script and info

// const data = [
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
//   {
//     name: "@johny",
//     title: "Lorem Ipsum",
//     bid: "Current Bid",
//     price: "0.005ETH",
//     img: "./Images/red love.svg",
//     cta: "Buy Now",
//   },
// ];
// const newdata = data.map((each) => {
//   return `
//        <div class="singleCards">
//         <div class="cardsCon">
//           <artcile>
//             <p class="Opacity">${each.name}</p>
//             <p class="noOpacity">${each.title}</p>
//           </artcile>
//           <section>
//             <p class="Opacity1">${each.bid}</p>
//             <p class="noOpacity1">${each.price}</p>
//           </section>
//         </div>
//         <div class="mainBtn">
//           <img src="./Images/red love.svg" alt="redlove" loading="lazy" />
//           <button class="cardsBtn">${each.cta}</button>
//         </div>
//       </div> `;
// });

// const mainCards = document.querySelector("#mainCards");

// mainCards.innerHTML = newdata.join(" ");

// FAQ SECTION SCRIPT

// let reviews = [
//   {
//     qos: "1. Lorem ipsum dolor sit amet.",
//     img: "Images/Up arrow.svg",
//     ans: ` Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             augue scelerisque fringilla congue. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut augue scelerisque fringilla congue.`,
//   },
//   {
//     qos: "1. Lorem ipsum dolor sit amet.",
//     img: "Images/Up arrow.svg",
//     ans: ` Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             augue scelerisque fringilla congue. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut augue scelerisque fringilla congue.`,
//   },
//   {
//     qos: "1. Lorem ipsum dolor sit amet.",
//     img: "Images/Up arrow.svg",
//     ans: ` Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             augue scelerisque fringilla congue. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut augue scelerisque fringilla congue.`,
//   },
//   {
//     qos: "1. Lorem ipsum dolor sit amet.",
//     img: "Images/Up arrow.svg",
//     ans: ` Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             augue scelerisque fringilla congue. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut augue scelerisque fringilla congue.`,
//   },
//   {
//     qos: "1. Lorem ipsum dolor sit amet.",
//     img: "Images/Up arrow.svg",
//     ans: ` Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             augue scelerisque fringilla congue. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut augue scelerisque fringilla congue.`,
//   },
// ];

// let newReviews = reviews.map((each) => {
//   return `
//     <div class="faqBoxcon">
//       <div class="faqBox" id="faqBox">
//         <div class="faqContainer">
//           <p class="faqDetails">${each.qos}</p>
//           <img
//             src="${each.img}"
//             alt="Up arrow"
//             loading="lazy"
//             class="upArrow"
//             id="upArrow"
//           />
//         </div>
//       </div>
//         <p class="faqSummary" id="faqSummary">
//            ${each.ans}
//           </p>
//     </div>`;
// });

// const overallFaq = document.querySelector(".overallFaq");

// overallFaq.innerHTML = newReviews;

// const faqBoxcon = document.querySelectorAll(".faqBoxcon");

// faqBoxcon.forEach((each) => {
//   each.addEventListener("click", function (e) {
//     console.log(e.currentTarget.lastElementChild);
//     e.currentTarget.lastElementChild.classList.toggle("faqSummary2");
//   });
// });

// Roadmap section script

const roadmap = [
  {
    phase: "Phase 1",
    info: "50GH of Hash power activation",
  },
  {
    phase: "Phase 2",
    info: "150GH of Hash power activation",
  },
  {
    phase: "Phase 3",
    info: "300GH of Hash power activation",
  },
  {
    phase: "Phase 4",
    info: "500GH of Hash power activation",
  },
  {
    phase: "Phase 5",
    info: "Build GMS's own mining facility with GMS fams",
  },
];
let newroadmap = roadmap.map((each) => {
  return `
  <div class="roadmapMobile">
        <h1 class="roadmapHead">${each.phase}</h1>
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
  {
    img: "Images/team4.png",
    name: "RAYAN",
    title: "Co-Founder",
  },
  {
    img: "Images/team5.png",
    name: "DEVIL",
    title: "Artist",
  },
  {
    img: "Images/team6.png",
    name: "PARTNER",
    title: "QnHBC,llc",
  },
];

let newteam = teams.map((each) => {
  return `
   <section class="teamCard">
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
