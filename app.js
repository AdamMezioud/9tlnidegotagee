const heroSection = document.querySelector(".hero");
heroSection.style.display = "grid";
heroSection.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
heroSection.style.gridGap = "30px";

const workSection = document.querySelector(".work");
workSection.style.display = "flex";
workSection.style.flexWrap = "wrap";
workSection.style.justifyContent = "center";

const heroBanner = document.querySelector(".hero-banner");
heroBanner.style.marginLeft = `calc(50% - ${heroBanner.offsetWidth / 2}px)`;

const workCards = document.querySelectorAll(".work-card");
workCards.forEach((workCard) => {
  workCard.style.marginLeft = `calc(50% - ${workCard.offsetWidth / 2}px)`;
});
