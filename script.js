// for the top nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// for the buttons on cards

// const button = document.querySelector(".breakout-button");

// if (button) {
//   button.addEventListener("click", (evt) => {
//     evt.preventDefault();

//     alert("Oh hi there 👋");
//   });
// }

// the alert box when pressing the send button
document.getElementById("save").onclick = function () {
  myFunction();
};
function myFunction() {
  document.getElementById("save");
  alert(
    "Error!! Please use the email schadi.faour@powercoders.org not this form! Thank you"
  );
}
