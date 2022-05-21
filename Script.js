const upArrow = document.querySelector("#upArrow");

const Run = () => {
  const faqSummary = document.querySelector("#faqSummary");
  upArrow.src = "./images/down arrow.svg";
  faqSummary.classList.toggle("faqSummaries");
};

upArrow.addEventListener("click", Run);
