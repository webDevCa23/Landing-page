//Hamburger Nav logic
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//sign up button logic
const signUpBtn = document.querySelector("#sign-up-btn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    console.log("Web page is available");
  } catch (e) {
    console.log("Page is Unavailable");
  }
});
