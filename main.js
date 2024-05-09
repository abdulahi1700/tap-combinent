const companyInfo = document.querySelectorAll(".company-info");
const details = document.querySelectorAll(".details");

companyInfo.forEach((info) => {
  info.addEventListener("click", (e) => {
    hideTabsActive();
    e.target.classList.add("btn-active");
    let currentInfo = document.querySelector(e.target.getAttribute("target"));
    currentInfo.classList.add("active");
  });
});

function hideTabsActive() {
  details.forEach((detal) => {
    detal.classList.remove("active");
  });

  companyInfo.forEach((info) => {
    info.classList.remove("btn-active");
  });
}
