const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".nav-ul");
const cancel = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    // navUL.classList.toggle("open-menu");
    // hamburger.classList.toggle("close-menu");
    navUL.style.display = "flex";
    hamburger.style.display = "none"
  });
  
  cancel.addEventListener("click", () => {
    // navUL.classList.toggle("open-menu");
    // hamburger.classList.toggle("close-menu");
    navUL.style.display = "none"
    hamburger.style.display = "block"
  }); 

//   Modal Section
const search = document.querySelector(".search");
const close = document.querySelector(".close-modal");
const modal = document.querySelector("#modal");

search.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

// open popup
function openPopup(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// close popup
function closePopup(e) {
    e.preventDefault();
    modal.style.display = "none";
}

AOS.init({duration:
    1000,
});