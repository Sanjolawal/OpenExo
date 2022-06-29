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

// NAVIGATION BAR OPENING AND CLOSING SCRIPT/

const hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#closed");
console.log(closed);

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

// CONNECT WALLET POPUP SCRIPT SECTION

const popUpClosed = document.querySelector("#popUpClosed");
const navMenu1 = document.querySelector("#navMenu1");
console.log(popUpClosed);

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

const data = [
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
  {
    name: "@johny",
    title: "Lorem Ipsum",
    bid: "Current Bid",
    price: "0.005ETH",
    img: "./Images/red love.svg",
    cta: "Buy Now",
  },
];
const newdata = data.map((each) => {
  return `
       <div class="singleCards">
        <div class="cardsCon">
          <artcile>
            <p class="Opacity">${each.name}</p>
            <p class="noOpacity">${each.title}</p>
          </artcile>
          <section>
            <p class="Opacity1">${each.bid}</p>
            <p class="noOpacity1">${each.price}</p>
          </section>
        </div>
        <div class="mainBtn">
          <img src="./Images/red love.svg" alt="redlove" loading="lazy" />
          <button class="cardsBtn">${each.cta}</button>
        </div>
      </div> `;
});

const mainCards = document.querySelector("#mainCards");

mainCards.innerHTML = newdata.join(" ");

// FAQ SECTION SCRIPT

const upArrow = document.querySelector("#upArrow");

const faqBox = document.querySelector("#faqBox");
const faqSummary = document.querySelector("#faqSummary");

let check = true;

function faqHide() {
  if (check) {
    faqSummary.style.display = "grid";
    faqBox.style.marginBottom = "1vh";
    upArrow.style.transform = "rotate(180deg)";
    check = false;
  } else {
    faqSummary.style.display = "none";
    faqBox.style.marginBottom = "4vh";
    upArrow.style.transform = "rotate(0deg)";
    check = true;
  }
}

upArrow.addEventListener("click", faqHide);

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

// console.log(newteam.join(" "));
const teamSubsection = document.querySelector(".teamSubsection");
teamSubsection.innerHTML = newteam.join(" ");
